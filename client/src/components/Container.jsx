import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';
import MarketPlace from './MarketPlace';
import SpecificCategory from './SpecificCategory';
import Header from './Header';
import Login from './Login';
import Signup from './Signup';


class Container extends Component {
    constructor() {
        super()
        this.state = {
            category: ''
        }
    }

    // setCategory = (event) => {
    //     let value = event.target.type;
    //     this.setState({
    //         category: value
    //     })
    // }

    render() {
        return (
            <div>
                {/* <Header /> */}

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
                        <button className='signout-btn' onClick={this.signOut}> Sign out</button>
                        {/* <Header /> */}
                        {/* <Redirect from="/" to="/dashboard" /> */}
                        <Dashboard userId={this.props.userId}/>


                        {/* <Container userId={this.state.user.id}  isSignedIn={isSignedIn} handleLogin={this.loginUser} handleSignUp={this.signUpUser}/> */}

                        {/* <main>
                            <Route exact path='/dashboard' render={(props) => <Dashboard {...props} userId={this.state.user.id} />}/>  
                            <Route exact path='/marketplace' component={MarketPlace}/>    
                            <Route exact path='/category' component={SpecificCategory}/>    
                        </main> */}
                        </div>
                        
                    }
                </div>
                
                {/* <main>
                  <Route exact path="/" render={() => (<Redirect to="/dashboard"/>)}/>
                  <Route exact path='/dashboard' render={(props) => <Dashboard {...props} userId={this.props.userId} />}/>  
                  <Route exact path='/marketplace' render={(props) => <MarketPlace {...props} setCategory={this.setCategory} />}/>
                  <Route exact path='/category' render={(props) => <SpecificCategory {...props} category={this.state.category} />}/>    
              </main> */}
            </div>
        )
    }
}

export default Container;