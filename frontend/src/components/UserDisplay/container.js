import React from "react";
import UserDisplay from "./presenter";

const Container = props => {
    console.log("D")
    console.log(props)
    console.log("D///////////////")
    return <UserDisplay {...props} />;
}



export default Container;