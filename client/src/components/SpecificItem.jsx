import React, { Component } from 'react';

class SpecificItem extends Component {
    render() {
        const { item } = this.props;
        return(
            <div key={item.id} className='specific-item-div'  className='item-container'>
                <h3 id={item.id} className='item-name' name={item.name} category={item.category}>{item.name}</h3>
                <h3 id={item.id} className='item-category' name={item.name} category={item.category}>{item.category}</h3>
                <img className='item-image' src={item.image} alt='item'/>
                <p id={item.id} className='item-desc' className='item-desc-cont'  name={item.name} category={item.category}>{item.description}</p>
            </div>
        )
    }
}

export default SpecificItem;