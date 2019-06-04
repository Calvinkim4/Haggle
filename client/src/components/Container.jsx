import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';
import MarketPlace from './MarketPlace';
import SpecificCategory from './SpecificCategory';
import Header from './Header';


class Container extends Component {
    constructor() {
        super()
        this.state = {
            category: ''
        }
    }

    setCategory = (event) => {
        let value = event.target.type;
        this.setState({
            category: value
        })
    }

    render() {
        return (
            <div>
                <Header />
                
                <main>
                  <Route exact path="/" render={() => (<Redirect to="/dashboard"/>)}/>
                  <Route exact path='/dashboard' render={(props) => <Dashboard {...props} userId={this.props.userId} />}/>  
                  <Route exact path='/marketplace' render={(props) => <MarketPlace {...props} setCategory={this.setCategory} />}/>
                  <Route exact path='/category' render={(props) => <SpecificCategory {...props} category={this.state.category} />}/>    
              </main>
            </div>
        )
    }
}

export default Container;