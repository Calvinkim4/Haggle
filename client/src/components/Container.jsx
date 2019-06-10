import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Login from './Login';
import Signup from './Signup';


class Container extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div>

                <div>
                    { !this.props.isSignedIn &&
                        <div className='register'>
                            <div className='homepage'>
                                <Login handleLogin={this.props.handleLogin}/>

                                <Signup handleSignUp={this.props.handleSignUp}/>
                            </div>
                        </div>
                    }

                    { this.props.isSignedIn &&
                        <div>
                        <button className='signout-button' onClick={this.props.signOut}> Sign out</button>
                        <Dashboard userId={this.props.userId} username={this.props.username}/>

                        </div>
                        
                    }
                </div>
                
            </div>
        )
    }
}

export default Container;