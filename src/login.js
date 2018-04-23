import React from 'react';
import { Paper, TextField, RaisedButton} from 'material-ui';
import axios from 'axios';
import style from './assets/style';
  

class Login extends React.Component {
    state = { email:"", password: ""};
    authorize = () => {
      axios.post('http://localhost:3001/auth',{
        email: this.state.email,
        password: this.state.password
      }).then((res) => {
        console.log("login success");
      }).catch(function (error) {
        console.log(error);
      });
    }
    render = () => {
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