import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';

class MarketPlace extends Component {
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
            </div>
        )
    }
}

export default MarketPlace;