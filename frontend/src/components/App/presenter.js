import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from "react-router-dom";
import './styles.scss';
import Navigation from "components/Navigation";
import Auth from 'components/Auth';
import Footer from 'components/Footer';


const App = props => [
    // Nav,
    // Routes,
    props.isLoggedIn ? <Navigation key={1} /> : null,
    props.isLoggedIn ? <PriveateRoutes key={2} /> : <PublicRoutes key={2} />,
    <Footer key={3} />
]

App.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
}

const PriveateRoutes = props => (
    <Switch>
        <Route key="1" exact path="/" render={() => "feed"} />
        <Route key="2" exact path="/explore" render={() => "explore"} />
    </Switch>
)

const PublicRoutes = props => (
    <Switch>
        <Route exact path="/" component={Auth} />
        <Route exact path="/forgot" render={() => "password"} />
    </Switch>
)

export default App;