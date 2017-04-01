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

    // This is a lifecycle method instantiating our Auth0 Object (I think)
    componentWillMount(){
        this.lock = new Auth0Lock(this.props.clientId, this.props.domain);

        // This adds a callback for an authenticated login event
        this.lock.on('authenticated', (authResult) => {
            console.log(authResult);
            this.lock.getUserInfo(authResult.accessToken, (err, profile) => {
                if(!err){
                    console.log(profile);
                } else {
                    console.log(err);
                }

            });
        });

        // This binds login functions to keep this context
        // this.login = this.login.bind(this)
    }

    //This method receives the onLoginClick from our Header Component
    showLock(){
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
