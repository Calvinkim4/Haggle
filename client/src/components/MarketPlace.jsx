import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MarketPlace extends Component {
    constructor() {
        super()
        this.state = {
            category: ''
        }
    }

    // componentDidMount = () => {
    //     const savedCategory = localStorage.getItem('category') === 'true';
    //     this.setState({
    //         category: savedCategory
    //     })

    //     console.log(localStorage.getItem('category'))
    // }

    // setCategory = (event) => {
    //     let value = event.target.type;
    //     this.setState({
    //         category: value
    //     })

    //     localStorage.setItem('category', value);
    //  }

    render() {
        return (
            <div>
                <Link to='/category' type="Auto" onClick={this.props.setCategory}>Auto</Link>
                <Link to='/category' type="Utensils" onClick={this.props.setCategory}>Utensils</Link>
                <Link to='/category' type="Electronics" onClick={this.props.setCategory}>Electronics</Link>
                <Link to='/category' type="Aparrel" onClick={this.props.setCategory}>Aparrel</Link>
                <Link to='/category' type="Jewelry" onClick={this.props.setCategory}>Jewelry</Link>
                <Link to='/category' type="Housing" onClick={this.props.setCategory}>Housing</Link>
                <Link to='/category' type="Gaming" onClick={this.props.setCategory}>Gaming</Link>
                <Link to='/category' type="Services" onClick={this.props.setCategory}>Services</Link>
                <Link to='/category' type="Materials" onClick={this.props.setCategory}>Materials</Link>
                <Link to='/category' type="Furniture" onClick={this.props.setCategory}>Furniture</Link>
                <Link to='/category' type="Antiques" onClick={this.props.setCategory}>Antiques</Link>

                {/* <h1>{this.props.category}</h1> */}
            </div>
        )
    }
}

export default MarketPlace;