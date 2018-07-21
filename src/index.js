import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import configureStore from "./store";
import { loginAction } from "./actions/loginAction";

import Login from "./components/login";
import Registration from "./components/registration";
import Index from "./components/index";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { AppBar } from "material-ui";
import { colors } from "material-ui/styles";
require("./assets/css/index.css");

class App extends React.Component {
    render() {
        return (
            <Provider store={configureStore}>
                <MuiThemeProvider>
                    <div>
                        <AppBar title="Vol-link" style={{backgroundColor:colors.teal500}} iconElementLeft={(<div />)}/>
                        <BrowserRouter>
                            <Switch>
                                <Route path="/" exact component={Login} />
                                <Route path="/index" exact component={Index} />
                                <Route path="/register" exact component={Registration} />
                            </Switch>
                        </BrowserRouter>
                    </div>
                </MuiThemeProvider>
            </Provider>
        )
    }
}


ReactDOM.render(<App />, document.getElementById("root"));
