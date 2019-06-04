import React, { Component } from 'react';

class SpecificCategory extends Component {
    constructor(props){
        super(props)
        this.state = {
            category: props.category
        }
    }
    render() {
        return(
            <div>
                <h1>{this.state.category}</h1>
            </div>
        )
    }
}

export default SpecificCategory;