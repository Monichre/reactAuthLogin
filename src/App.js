import React, { Component } from 'react';
import Auth0Lock from 'auth0-lock';
import {Grid, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import './App.css';


class App extends Component {

    // This sets default props. Presumably unchanging given the word 'static'
    static defaultProps = {
        clientId: 'YtmhCb5WOq1Gmb4FafujETZVd5NOFUAD',
        domain: 'monichre.auth0.com'
    }

    setData(accessToken, profile) {
        localStorage.setItem('accessToken', accessToken); //Saving to local storage - which can only accept strings * normally we would do this in a database
        localStorage.setItem('profile', JSON.stringify(profile)); // Therefore we will be using JSON.stringify

        this.setState({ // Now saving to 'state'
            accessToken: localStorage.getItem('accessToken'),
            profile: JSON.parse(localStorage.getItem('profile')) // We need to convert this back to a JSON object for our programming purposes
        });
    }
    getData(){ // Will check for Token and get profile data
        if( localStorage.getItem('accessToken') != null ) {

            this.setState({ // Will set state if local storage exists
                accessToken: localStorage.getItem('accessToken'),
                profile: JSON.parse(localStorage.getItem('profile')) // We need to convert this back to a JSON object for our programming purposes
            }, () => {
                console.log(this.state);
            });
        }
    }
    componentWillMount(){ // This is a lifecycle method instantiating our Auth0 Object (I think)
        this.lock = new Auth0Lock(this.props.clientId, this.props.domain);

        this.lock.on('authenticated', (authResult) => { // This adds a callback for an authenticated login event
            this.lock.getUserInfo(authResult.accessToken, (err, profile) => {
                if(!err){
                    this.setData(authResult.accessToken, profile);
                }
            });
        });

        this.getData();
    }
    showLock(){ //This method receives the onLoginClick from our Header Component
        this.lock.show();
    }

  render() {
    return (
    <div className="App">
        <Header onLoginClick={this.showLock.bind(this)}/>
        <Home />
    </div>
    );
  }
}

export default App;
