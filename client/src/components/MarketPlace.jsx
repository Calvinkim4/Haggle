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
            <div className='category-container'>
                <Link to='/category' className='category-div' type="Auto" onClick={this.props.setCategory}>Auto</Link>
                <Link to='/category' className='category-div' type="Utensils" onClick={this.props.setCategory}>Utensils</Link>
                <Link to='/category' className='category-div' type="Electronics" onClick={this.props.setCategory}>Electronics</Link>
                <Link to='/category' className='category-div' type="Apparel" onClick={this.props.setCategory}>Apparel</Link>
                <Link to='/category' className='category-div' type="Jewelry" onClick={this.props.setCategory}>Jewelry</Link>
                <Link to='/category' className='category-div' type="Housing" onClick={this.props.setCategory}>Housing</Link>
                <Link to='/category' className='category-div' type="Gaming" onClick={this.props.setCategory}>Gaming</Link>
                <Link to='/category' className='category-div' type="Services" onClick={this.props.setCategory}>Services</Link>
                <Link to='/category' className='category-div' type="Materials" onClick={this.props.setCategory}>Materials</Link>
                <Link to='/category' className='category-div' type="Furniture" onClick={this.props.setCategory}>Furniture</Link>
                <Link to='/category' className='category-div' type="Antiques" onClick={this.props.setCategory}>Antiques</Link>
                <Link to='/category' className='category-div' type="Junk" onClick={this.props.setCategory}>Junk</Link>

                {/* <h1>{this.props.category}</h1> */}
            </div>
        )
    }
}

export default MarketPlace;