import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './login';
import Registration from './registration';

export default () => {
    return (
        <div className="main-container">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/register" exact component={Registration} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}