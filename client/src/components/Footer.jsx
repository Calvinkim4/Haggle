import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
            <div className='footer-div'>
                <div className='about-container'>
                    <h5>About Us</h5>
                <p>We are offering a platform where people can barter with one another. Instead of using money, trade something you might not find valuable for something you want. By chance that person might find your item valuable.</p>
                </div>
                
                <div className='contact-container'>
                    <h5>Contact Us</h5>
                    <h6>Phone: Not Yet Available</h6>
                    <h6>Text: Not Yet Available</h6>
                    <h6>Email: Not Yet Available</h6>
                    <h6>Address: Not Yet Available</h6>
                </div>
                
            </div>
        )
    }
}

export default Footer;