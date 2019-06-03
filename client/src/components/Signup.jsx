import React, { Component } from 'react';

class Signup extends Component {
    render () {
        return (
            <div>
                <h2>Sign Up</h2>
                <form className='signup-form'>
                    <div>
                        <input className='login-input' type='text' name='username' placeholder='Username'/>
                    </div>

                    <div>
                        <input className='login-input' type='text' name='email' placeholder='Email'/>
                    </div>

                    <div>
                        <input className='login-input' type='password' name='password' placeholder='Password'/>
                    </div>

                    <button className='login-btn'>Register</button>
                 </form>
            </div>
        )
    }
}

export default Signup;