import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar } from 'material-ui';
import { colors } from 'material-ui/styles';
require('./assets/css/index.css');

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
                        iconElementLeft={(<div />)}
                    />
                    <Routes/>
                </div>
            </MuiThemeProvider>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
