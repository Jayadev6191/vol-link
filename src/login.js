import React from 'react';
import { connect } from "react-redux";
import { Paper, TextField, RaisedButton} from 'material-ui';
import { colors } from 'material-ui/styles';
import axios from 'axios';

class Login extends React.Component {
    state = { email:"", password: ""};
    authorize = () => {
      axios.post('http://localhost:3001/auth',{
        email: this.state.email,
        password: this.state.password
      }).then((res) => {
        
      }).catch(function (error) {
        console.log(error);
      });
    }
    render = () => {
      return (
        <Paper className="login">
                <TextField floatingLabelText="email" type="email" 
                           value={this.state.email} 
                           onChange={(evt)=>{ this.setState({email:evt.target.value}) }}/><br/>
                <TextField floatingLabelText="password" type="password" 
                           value={this.state.password}
                           onChange={(evt)=>{ this.setState({password:evt.target.value}) }} /><br/>
                <RaisedButton label="Login" className="login-btn"
                              onClick={this.authorize}
                              labelColor={colors.fullWhite}
                              backgroundColor={colors.teal500} />
                <div className="login-footer">
                      New here?&nbsp;<a href="/register">Sign up</a>
                </div>
        </Paper>
      )
    }
}

export default Login;