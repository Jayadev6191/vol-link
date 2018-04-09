import React from 'react';
import { Paper, TextField, RaisedButton} from 'material-ui';
import style from './assets/style';
  

class Login extends React.Component {
    render() {
      return (
        <Paper style={style.logreg}>
                <TextField floatingLabelText="email" /><br/>
                <TextField floatingLabelText="password" /><br/>
                <RaisedButton label="Login" style={style.login.btn}/>
        </Paper>
      )
    }
}

export default Login;