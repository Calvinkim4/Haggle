import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';
import MarketPlace from './MarketPlace';

class Header extends Component {
    render() {
        return(
            <div>
                {/* <Link to='/dashboard'>Dashboard</Link> */}
                {/* <Link to='/marketplace'>MarketPlace</Link> */}
                {/* <Redirect from="/" to="/dashboard" />  */}
                
                {/* <main>
                    <Route exact path='/dashboard' render={(props) => <Dashboard {...props} userId={this.props.userId} />}/>  
                    <Route exact path='/marketplace' component={MarketPlace}/>    
                </main> */}
            </div>
        )
    }
}

export default Header;