import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SpecificItem extends Component {

    render() {
        const { item, isSignedIn } = this.props;
        return(
            <div key={item.id} className='item-container'>
                <h3 id={item.id} className='item-name' name={item.name} category={item.category}>{item.name}</h3>
                <h3 id={item.id} className='item-category' name={item.name} category={item.category}>{item.category}</h3>
                <img className='item-image' src={item.image} alt='item'/>
                <p id={item.id} className='item-desc item-desc-cont'  name={item.name} category={item.category}>{item.description}</p>
                {isSignedIn ? <Link to='dashboard'><button className='message-button' id={item.userId}>Message</button></Link>: null}
            </div>
        )
    }
}

export default SpecificItem;