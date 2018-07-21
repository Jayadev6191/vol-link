import React from "react";
// import { connect } from "react-redux";
import { Paper, TextField, RaisedButton} from "material-ui";
import { colors } from "material-ui/styles";
import { loginAction } from "./actions/loginAction";

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  loginAction: () => dispatch(loginAction())
})

class Login extends React.Component {
    state = { email:"", password: ""};
    authorize = () => {
      this.props.loginAction();
      // axios.post("http://localhost:300JM1GJ1U59G14300071/auth",{
      //   email: this.state.email,
      //   password: this.state.password
      // }).then((res) => {
      //   // if(res.status == 200) {
      //   //   location.href = "/index";
      //   // }
      // }).catch(function (error) {
      //   console.log(error);
      // });
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
                <RaisedButton label="Login" className="auth-btn"
                              onClick={this.authorize}
                              labelColor={colors.fullWhite}
                              backgroundColor={colors.teal500} />
                <div className="auth-footer">
                      New here?&nbsp;<a href="/register">Register Now</a>
                </div>
        </Paper>
      )
    }
}

export default Login;