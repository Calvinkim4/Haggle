import React, { Component } from 'react';
import { getAllFromCategory } from '../services/categoryService';
import SpecificItem from './SpecificItem';

class SpecificCategory extends Component {
    constructor(props){
        super(props)
        this.state = {
            items: [],
            category: props.category
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
            return <SpecificItem item={item} key={item.id}/>   
        }): null;
        return(
            <div className='items-container' id='items-container-cont'>
                {/* <h1>{this.props.category}</h1> */}
                {allItems}
            </div>
        )
    }
}

export default SpecificCategory;