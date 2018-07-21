import React from "react";
import { Paper, TextField, RaisedButton, Snackbar} from "material-ui";
import { colors } from "material-ui/styles";
import axios from "axios";

class Registration extends React.Component {
    state = { 
      firstName:"Jayadev",
      lastName:"Akkiraju",
      email:"jaidev.akkiraju@gmail.com",
      password: "12345",
      designation:"engineer",
      address:"215 terry street",
      stateName:"CA",
      city:"san jose",
      country:"USA",
      zipCode:"95136",
      snackbarOpen: false,
      errMsg: ""
    };

    authorize = () => {
      const {firstName,lastName,email,password,designation,address,stateName,city,country,zipCode} = this.state;
      axios.post("http://localhost:3001/register",{
        firstName,
        lastName,email,
        password,designation,
        address,stateName,
        city,country,zipCode
      }).then((res) => {
        console.log(res.data);
      }).catch((error) => {
        this.setState({
          errMsg: error.response.data,
          snackbarOpen: true
        })
      });
    }
    render = () => {
      return (
        <Paper className="registration">
                <TextField floatingLabelText="First Name" type="text" 
                           value={this.state.firstName} 
                           onChange={(evt)=>{this.setState({firstName:evt.target.value})}}/><br/>
                <TextField floatingLabelText="Last Name" type="text" 
                           value={this.state.lastName}
                           onChange={(evt)=>{this.setState({lastName:evt.target.value})}}/><br/>
                <TextField floatingLabelText="Email" type="email" 
                           value={this.state.email}
                           onChange={(evt)=>{this.setState({email:evt.target.value})}}/><br/>
                <TextField floatingLabelText="Password" type="password" 
                           value={this.state.password}
                           onChange={(evt)=>{this.setState({password:evt.target.value})}}/><br/>
                <TextField floatingLabelText="Designation" type="text" 
                           value={this.state.designation}
                           onChange={(evt)=>{this.setState({designation:evt.target.value})}}/><br/>
                <TextField floatingLabelText="Address" type="text" 
                           value={this.state.address}
                           onChange={(evt)=>{this.setState({address:evt.target.value})}}/><br/>
                <TextField floatingLabelText="State" type="text" 
                           value={this.state.stateName}
                           onChange={(evt)=>{this.setState({stateName:evt.target.value})}}/><br/>
                <TextField floatingLabelText="City" type="text" 
                           value={this.state.city}
                           onChange={(evt)=>{this.setState({city:evt.target.value})}}/><br/>
                <TextField floatingLabelText="Country" type="text" 
                           value={this.state.country}
                           onChange={(evt)=>{this.setState({country:evt.target.value})}}/><br/>
                <TextField floatingLabelText="Zip Code" type="text" 
                           value={this.state.zipCode}
                           onChange={(evt)=>{this.setState({zipCode:evt.target.value})}}/><br/>
                <RaisedButton label="Register Now" className="auth-btn"
                              onClick={this.authorize}
                              labelColor={colors.fullWhite}
                              backgroundColor={colors.teal500} />
                <div className="auth-footer">
                      Already have an account?&nbsp;<a href="/">Login</a>
                </div>

                <Snackbar
                  open={this.state.snackbarOpen}
                  message={this.state.errMsg}
                  autoHideDuration={4000}
                  onRequestClose={this.handleRequestClose}
                />
        </Paper>
      )
    }
}

export default Registration;