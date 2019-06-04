import React, { Component } from 'react';
import './App.css';
import authService from './services/authService';
import { login, getProfile, signUp } from './services/apiService';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import MarketPlace from './components/MarketPlace';
import { Link, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import SpecificCategory from './components/SpecificCategory';
import Container from './components/Container';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: false,
      user: {}
    }
  }

  async componentDidMount() {
    try {
      const fetchedUser = await getProfile();

      this.setState({
        isSignedIn: authService.isAuthenticated(),
        user: fetchedUser
      })
    } catch (error) {
      //console.log('Issue fetching token')
    }
  }

  signOut = () => {
    authService.signOut();
    this.setState({
      isSignedIn: false,
      user: {}
    })
  }

  loginUser = async (credentials) => {
    try {
      const user = await login(credentials)

      this.setState({
        isSignedIn: true,
        user: user
      })
    } catch (error) {
      throw error
    }

  }

  signUpUser = async (credentials) => {
    try {
      const user = await signUp(credentials)

      this.setState({
        isSignedIn: true,
        user: user
      })
    } catch (error) {
      throw error
    }
  }


  render() {
    const { isSignedIn } = this.state  
    return (
      <div className="App">
        <h1 className='title'>Haggle</h1>
        <nav className='nav-bar'>
          <Link className='nav-bar-link' to='/marketplace'><li>MarketPlace</li></Link>
          <Link className='nav-bar-link' to='logsign'><li>LogIn/SignUp</li></Link>
          <Link className='nav-bar-link' to='/about'><li>About</li></Link>
        </nav>

        {/* <About /> */}

        {/* <Contact /> */}
        {/* <div className='contact-div'> */}
          {/* { !isSignedIn && */}
            {/* <div className='register'> */}
              {/* <div className='homepage'>
                <Login isSignedIn={isSignedIn} handleLogin={this.loginUser}/>

                <Signup isSignedIn={isSignedIn} handleSignUp={this.signUpUser}/>
              </div> */}
            {/* </div> */}
          {/* } */}

          {/* // { isSignedIn && */}
            {/* <div> */}
              {/* <button className='signout-btn' onClick={this.signOut}> Sign out</button> */}
              {/* <Header /> */}
              {/* <Redirect from="/" to="/dashboard" /> */}
              {/* <Dashboard userId={this.state.user.id}/> */}


              {/* <Container userId={this.state.user.id}  isSignedIn={isSignedIn} handleLogin={this.loginUser} handleSignUp={this.signUpUser}/> */}

              {/* <main>
                  <Route exact path='/dashboard' render={(props) => <Dashboard {...props} userId={this.state.user.id} />}/>  
                  <Route exact path='/marketplace' component={MarketPlace}/>    
                  <Route exact path='/category' component={SpecificCategory}/>    
              </main> */}
            {/* </div> */}
            
          {/* } */}
        {/* </div> */}
        
        {/* <Link to='/dashboard'>Dashboard</Link> */}
        {/* <div className='homepage'>
          <Login />
          <Signup />
        </div> */}

        {/* <main>
          <Route exact path='/dashboard' render={(props) => <Dashboard {...props} userId={this.state.user.id} />}/>  
          <Route exact path='/marketplace' component={MarketPlace}/>
        </main> */}

        <main>
          {/* <Redirect from="/" to="/marketplace" /> */}
          <Route exact path='/marketplace' render={(props) => <MarketPlace {...props}/>}/>    
          <Route exact path='/about' component={About}/>
          <Route exact path='/logsign' render={(props) => <Container userId={this.state.user.id} isSignedIn={isSignedIn} handleLogin={this.loginUser} handleSignUp={this.signUpUser} {...props}/>}/>
        </main>

        <Footer />
        
      </div>
    )
  }
  
}

export default App;
