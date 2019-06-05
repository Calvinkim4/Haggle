import React, { Component } from 'react';
import { getAllFromCategory } from '../services/categoryService';

class SpecificCategory extends Component {
    constructor(props){
        super(props)
        this.state = {
            items: []
            // category: props.category
        }
    }

    componentDidMount = async () => {
        let allItems = await getAllFromCategory(this.props.category);
            this.setState({
                items: allItems
            })
    }

    componentDidUpdate = async (prevProps, prevState) => {
        if (prevProps.category!==this.props.category){
            let allItems = await getAllFromCategory(this.props.category);
            this.setState({
                items: allItems
            })
        }
      }

    render() {
        const allItems = this.state.items ?  this.state.items.map(item => {
            return (
                <div key={item.id}>
                   <h3 id={item.id} name={item.name} category={item.category}>{item.name}</h3>
                   <h3 id={item.id} name={item.name} category={item.category}>{item.category}</h3>
                   <img className='item-image' src={item.image} alt='item'/>
                    {/* <button value={item.id} onClick={this.showModal}>Update</button> 
                    <button value={item.id} onClick={this.onDeleteClick}>Delete</button>  */}
                </div>
                
            )
        }): null;
        return(
            <div>
                <h1>{this.props.category}</h1>
                {allItems}
            </div>
        )
    }
}

export default SpecificCategory;