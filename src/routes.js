import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import {isAuthenticated } from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route { ...rest} render={props =>(
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={ pathname: '/', state: { from: props.location} } />
        )
    )
}
/>
)

import Login from './pages/Login';
import Main from './pages/Main';

export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login} />
            <PrivateRoute path="/main" component={Main} />
        </Switch>    
        </BrowserRouter>
    );
}