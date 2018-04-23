import React from 'react';
import { Paper, TextField, RaisedButton} from 'material-ui';
import style from './assets/style';
  

class Login extends React.Component {
    state = { email:"", password: ""};
    authorize() {
      console.log("authorizing");
    }
    render() {
      return (
        <Paper style={style.logreg}>
                <TextField floatingLabelText="email" type="email" 
                           value={this.state.email} 
                           onChange={(evt)=>{ this.setState({email:evt.target.value}) }}/><br/>
                <TextField floatingLabelText="password" type="password" 
                           value={this.state.password}
                           onChange={(evt)=>{ this.setState({password:evt.target.value}) }} /><br/>
                <RaisedButton label="Login" style={style.login.btn} onClick={this.authorize} />
        </Paper>
      )
    }
}

export default Login;