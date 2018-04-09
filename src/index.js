import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar } from 'material-ui';
import { colors } from 'material-ui/styles';
import Login from './login'

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title="Vol-link"
                        style={{
                            backgroundColor:colors.teal500
                        }}
                    />
                    <Login/>
                </div>
            </MuiThemeProvider>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
