// imports
import _ from 'lodash';
// actions

const SAVE_TOKEN = "SAVE_TOKEN";
const LOGOUT = "LOGOUT";
const SET_USER_LIST = "SET_USER_LIST";
const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";
const SET_IMAGE_LIST = "SET_IMAGE_LIST";
const SET_NOTIFI_LIST = "SET_NOTIFI_LIST";
const ADD_USER_LIST = "ADD_USER_LIST";
const USER_PROFILE = "USER_PROFILE";

// action creators

function saveToken(token, username) {
    return {
        type: SAVE_TOKEN,
        token,
        username
    }
}

function logout() {
    return {
        type: LOGOUT
    };
}


function setFollowUser(userId) {
    return {
        type: FOLLOW_USER,
        userId
    };
}

function setUnfollowUser(userId) {
    return {
        type: UNFOLLOW_USER,
        userId
    };
}

function setUserProfile(userProfile){
    return {
        type: USER_PROFILE,
        userProfile
    }
}

function setUserList(userList) {
    return {
        type: SET_USER_LIST,
        userList: userList
    }
}

function addUserList(userList) {
    return {
        type: ADD_USER_LIST,
        userList
    }
}

function setImageList(imageList) {
    return {
        type: SET_IMAGE_LIST,
        imageList
    }
}

function setNotification(notifiList) {
    return {
        type: SET_NOTIFI_LIST,
        notifiList
    }
}


// API actions

function facebookLogin(access_token) {
    return function (dispatch) {
        fetch("/users/login/facebook/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                access_token: access_token
            })
        })
        .then(response => response.json())
        .then(json => {
            if (json.token) {
                dispatch(saveToken(json.token, json.user.username));
            }
        })
        .catch(err => console.log(err));
    };
}

function usernameLogin(username, password) {
    return function (dispatch) {
        fetch("/rest-auth/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(response => response.json())
        .then(json => {
            if (json.token) {
                dispatch(saveToken(json.token, json.user.username));
            }
        })
        .catch(err => console.log(err));
    };
}

function createAccount(username, password, email, name) {
    return function (dispatch) {
        fetch("/rest-auth/registration/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password1: password,
                password2: password,
                email,
                name
            })
        })
        .then(response => response.json())
        .then(json => {
            if (json.token) {
                dispatch(saveToken(json.token));
            }
        })
        .catch(err => console.log(err));
    };
}

function getPhotoLikes(photoId) {
    return (dispatch, getState) => {
        const { user: { token } } = getState();
        fetch(`/images/${photoId}/likes/`, {
            headers: {
                Authorization: `JWT ${token}`
            }
        })
        .then(response => {
            if (response.status === 401) {
                dispatch(logout());
            }
            return response.json();
        })
        .then(json => {
            dispatch(setUserList(json));
        })
    }
};

// function followUser(userId){
//     return(dispatch, getState) => {
//         dispatch(setFollowUser(userId));
//     }
// }

// function unfollowUser(userId) {
//     return (dispatch, getState) => {
//         dispatch(setUnfollowUser(userId));
//     }
// }


function followUser(userId) {
    return (dispatch, getState) => {
        dispatch(setFollowUser(userId));
        const { user: { token } } = getState();
        fetch(`/users/${userId}/follow/`, {
            method: "POST",
            headers: {
                Authorization: `JWT ${token}`,
                "Content-Type": "application/json"
            }
        }).then(response => {
            if (response.status === 401) {
                dispatch(logout());
            } else if (!response.ok) {
                dispatch(setUnfollowUser(userId));
            }
        });
    }
}

function unfollowUser(userId) {
    return (dispatch, getState) => {
        dispatch(setUnfollowUser(userId));
        const { user: { token } } = getState();
        fetch(`/users/${userId}/unfollow/`, {
            method: "POST",
            headers: {
                Authorization: `JWT ${token}`,
                "Content-Type": "application/json"
            }
        }).then(response => {
            if (response.status === 401) {
                dispatch(logout());
            } else if (!response.ok) {
                dispatch(setFollowUser(userId));
            }
        });
    };
}

function userByTerm(userTerm) {
    return async (dispatch, getState) => {
        const { user: { token } } = getState();
        const userProfile = await getProfile(token, userTerm);
        // const imageList = await searchImages(token, searchTerm);
        // if (userList === 401 || imageList === 401) {
        //     dispatch(logout());
        // }
        dispatch(setUserProfile(userProfile));
        // dispatch(setImageList(imageList));
    }
}

function getProfile(token, userTerm) {
    console.log(userTerm)
    return fetch(`/users/${userTerm}/`, {
        headers: {
            Authorization: `JWT ${token}`,
        }
    })
    .then(response => {
        if (response.status === 401) {
            return 401
        }
        console.log(response)
        return response.json()
    })
    .then(json => json)
    .catch(err => console.log(err));
}

function getExplore() {
    return (dispatch, getState) => {
        const { user } = getState();
        const { token } = user;
        fetch(`/users/explore/`, {
            method: "GET",
            headers: {
                Authorization: `JWT ${token}`,
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            if (response.status === 401) {
                dispatch(logout());
            }
            return response.json()
        })
        .then(json => {
            console.log("getExplore")
            console.log(json)
            const trueUserList = _.keyBy(json, function(o){return o.id})
            console.log(trueUserList)
            console.log("로대쉬")
            if (user.userList) {
                console.log('여기들어올텐데')
                dispatch(addUserList(json))
            }
            else {
                dispatch(setUserList(json))
            }
        })
    };
}

function getNotification() {
    return async (dispatch, getState) => {
        const { user } = getState();
        const { token } = user;
        await fetch(`/notifications/`, {
            method: "GET",
            headers: {
                Authorization: `JWT ${token}`,
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            console.log(response)
            if (response.status === 401) {
                dispatch(logout());
            }
            return response.json()
        })
        .then(json => {
            dispatch(setNotification(json))
            if (!user.userList) {
                const userList = json.map(notifiList => {
                    if (notifiList.notification_type === "follow") {

                        return { ...notifiList.creator };
                    }
                    return undefined
                }).filter(n => { return n !== undefined });
                dispatch(setUserList(userList))
            }
        })
    }
}

function searchByTerm(searchTerm) {
    return async (dispatch, getState) => {
        const { user: { token } } = getState();
        const userList = await searchUsers(token, searchTerm);
        const imageList = await searchImages(token, searchTerm);
        if (userList === 401 || imageList === 401) {
            dispatch(logout());
        }
        dispatch(setUserList(userList));
        dispatch(setImageList(imageList));
    }
}

function searchUsers(token, searchTerm) {
    return fetch(`/users/search/?username=${searchTerm}`, {
        headers: {
            Authorization: `JWT ${token}`,
        }
    })
    .then(response => {
        if (response.status === 401) {
            return 401
        }
        return response.json()
    })
    .then(json => json);
}


function searchImages(token, searchTerm) {
    return fetch(`/images/search/?hashtags=${searchTerm}`, {
        headers: {
            Authorization: `JWT ${token}`,
        }
    })
    .then(response => {
        if (response.status === 401) {
            return 401
        }
        return response.json()
    })
    .then(json => json);
}



// initial state
const initialState = {
    isLoggedIn: localStorage.getItem("jwt") ? true : false,
    token: localStorage.getItem("jwt"),
    username: localStorage.getItem("username")
};


// reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_TOKEN:
            return applySetToken(state, action);
        case LOGOUT:
            return applyLogout(state, action);
        case SET_USER_LIST:
            return applySetUserList(state, action);
        case FOLLOW_USER:
            return applyFollowUser(state, action);
        case UNFOLLOW_USER:
            return applyUnfollowUser(state, action);
        case SET_IMAGE_LIST:
            return applySetImageList(state, action);
        case SET_NOTIFI_LIST:
            return applySetNotifiList(state, action);
        case ADD_USER_LIST:
            return applyAddUserList(state, action);
        case USER_PROFILE:
            return applyUserProfile(state, action);
        default:
            return state;
    }
}


// reducer functions

function applySetToken(state, action) {
    const { token } = action;
    const { username } = action;
    console.log(action)
    console.log("token")
    localStorage.setItem("jwt", token);
    localStorage.setItem("username", username);
    return {
        ...state,
        isLoggedIn: true,
        token,
        username
    }
}

function applyLogout(state, action) {
    localStorage.removeItem("jwt");
    localStorage.removeItem("username");
    return {
        isLoggedIn: false
    }
}

function applySetUserList(state, action) {
    const { userList } = action;
    return {
        ...state,
        userList
    }
}

function applyFollowUser(state, action) {
    const { userId } = action;
    const { userList, notifiList } = state;
    const updatedUserList = userList.map(user => {
        if (user.id === userId) {
            return { ...user, following: true };
        }
        return user;
    });

    const updatedNotifiList = notifiList.map(notifi => {
        if (notifi.notification_type === "follow") {
            if (notifi.creator.id === userId) {
                return { ...notifi, 
                    creator: { 
                        ...notifi.creator,
                        following:  true 
                    } 
                }
            }
        }
        return notifi;
    });


    return {
        ...state,
        userList: updatedUserList,
        notifiList: updatedNotifiList
    }
}

function applyUnfollowUser(state, action) {
    const { userId } = action;
    const { userList, notifiList } = state;
    const updatedUserList = userList.map(user => {
        if (user.id === userId) {
            return { ...user, following: false };
        }
        return user;
    });
    const updatedNotifiList = notifiList.map(notifi => {
        if (notifi.notification_type === "follow") {
            if (notifi.creator.id === userId) {
                return {
                    ...notifi,
                    creator: {
                        ...notifi.creator,
                        following: false
                    }
                }
            }
        }
        return notifi;
    });
    return {
        ...state,
        userList: updatedUserList,
        notifiList: updatedNotifiList
    }
}

function applyUserProfile(state, action) {
    const { userProfile } = action;
    return {
        ...state,
        userProfile
    }

}

function applySetImageList(state, action) {
    const { imageList } = action;
    return {
        ...state,
        imageList
    }
}

function applySetNotifiList(state, action) {
    const { notifiList } = action;
    return {
        ...state,
        notifiList
    }
}

function applyAddUserList(state, action) {
    const prevUserList = state.userList;
    console.log(prevUserList)
    const { userList } = action;
    console.log("추가state")
    console.log(userList)
    // const addList = userList.map(list => {
    //     console.log("prevUserList.id")
    //     console.log(prevUserList.id)
    //     prevUserList.map(preList => {
    //         if(preList.id === list.id){
    //             list.delete(list);
    //             return { ...list }
    //         }
    //     })
    // })
    // console.log(addList)

    return {
        ...state,
        // userList: [
        //     ...state.userList,
        //     addList
        // ]
        userList
    }
}


// exports

const actionCreators = {
    facebookLogin,
    usernameLogin,
    createAccount,
    logout,
    getPhotoLikes,
    followUser,
    unfollowUser,
    getExplore,
    getNotification,
    searchByTerm,
    userByTerm
};

export { actionCreators };

// reducer export

export default reducer;
