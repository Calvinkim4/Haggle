import React, { Component } from 'react';

class Login extends Component {
    render () {
        return (
            <div>
                <h2>Login</h2>
                <form className='login-form'>
                    <div>
                        <input className='login-input' type='text' name='username' placeholder='Username'/>
                    </div>

                    <div>
                        <input className='login-input' type='password' name='password' placeholder='Password'/>
                    </div>

                    <button className='login-btn'>Login</button>
                 </form>
            </div>
        )
    }
}

export default Login;