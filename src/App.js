import React, {Component} from 'react';
import logo from './logo.svg';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Calendar from './calendar/Calendar';

injectTapEventPlugin();

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="App ">
                    <div className="App-header">
                        <img src={logo} className="App-logo pull-right" alt="logo"/>
                        <h3>Welcome to React</h3>
                    </div>
                    <p className="App-intro container">
                        <Calendar/>
                    </p>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App;
