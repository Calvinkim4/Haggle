import React, { Component } from 'react';
import Contact from './Contact';

class About extends Component {

    // componentDidMount = () => {
    //     localStorage.clear();
    // }
    
    render(){
        return(
            <div>
                <div className='contact-div'>
                    <h2>About Us</h2>
                    <p>We are offering a platform where people can barter with one another. Instead of using money, trade something you might not find valuable for something you want. By chance that person might find your item valuable. </p>
                </div> 
                <Contact />
            </div>
            
        )
    }
}

export default About;