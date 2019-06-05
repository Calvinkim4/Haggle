import React, { Component } from 'react';

class SpecificItem extends Component {
    render() {
        const { item } = this.props;
        return(
            <div key={item.id} className='specific-item-div'>
                <h3 id={item.id} name={item.name} category={item.category}>{item.name}</h3>
                <h3 id={item.id} name={item.name} category={item.category}>{item.category}</h3>
                <img className='item-image' src={item.image} alt='item'/>
            </div>
        )
    }
}

export default SpecificItem;