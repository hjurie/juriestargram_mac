import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from "react-router-dom";
import './styles.scss';
import Navigation from "components/Navigation";
import Auth from 'components/Auth';
import Footer from 'components/Footer';
import Feed from "components/Feed";
import Explore from "components/Explore";
import Search from "components/Search";
import UserProfile from "components/UserProfile";


const App = props => [
    // Nav,
    // Routes,
    props.isLoggedIn ? <Navigation key={1} username={props.username} /> : null,
    props.isLoggedIn ? <PriveateRoutes key={2} /> : <PublicRoutes key={2} />,
    <Footer key={3} />
]

App.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired
}

const PriveateRoutes = props => (
    <Switch>
        <Route key="1" exact path="/" component={Feed} />
        <Route key="2" exact path="/explore/" component={Explore} />
        <Route key="3" exact path="/:username" component={UserProfile} />
        <Route path="/search/:searchTerm" component={Search} />
    </Switch>
)

const PublicRoutes = props => (
    <Switch>
        <Route exact path="/" component={Auth} />
        <Route exact path="/forgot" render={() => "password"} />
    </Switch>
)

export default App;