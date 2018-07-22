/*
 src/actions/LoginAction.js
*/
import axios from "axios";

export const loginAction = () => dispatch => {
    dispatch(loginAsync())
}

function loginAsync() {
    return {
        type: "LOGIN_ACTION",
        payload: "Login action"
    }
}