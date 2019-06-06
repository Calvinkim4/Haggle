import React, { Component } from 'react';
import { createItem, getAllItems, getItem, updateItem, deleteItem} from '../services/itemService';
import ChatBox from './ChatBox';
// import MarketPlace from './MarketPlace';
// import { Link, Route } from 'react-router-dom';

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            items: [],
            name: '',
            category: '',
            image: '',
            description: '',
            show: false,
            updatedItem: {}
        }
    }

    componentDidMount = async () => {
        const items = await getAllItems(this.props.userId);
        this.setState({
            items: items
        })
    }

    handleSubmitForm = async (event) => {
        event.preventDefault()
    
        const { name, category } = this.state;

        let item = {
            name: name,
            category: category.toLowerCase(),
            image: this.state.image,
            description: this.state.description
          }
    
        await createItem(this.props.userId, item);
        const items = await getAllItems(this.props.userId);
        this.setState({
            items: items
        })

        this.eraseInputs();
    }

    handleTextInput = (event) => {
        const fieldName = event.target.name;
        const value = event.target.value;

        this.setState(state => {
            return { [fieldName]: value }
        })

    }

    showModal = async (event) => {
        const id = event.target.value;
        const item = await getItem(this.props.userId, id);
        this.setState({
            show: true,
            updatedItem: item,
            name: item.name,
            category: item.category,
            description: item.description,
            image: item.image,
            id: id
        });

    };

    hideModal = () => {
        this.setState({
            show: false
        });
    };

    onUpdateClick = async (event) => {
        event.preventDefault();
        const id = this.state.id;
    
        let updatedItem = {
          name: this.state.name,
          category: this.state.category.toLowerCase(),
          image: this.state.image,
          description: this.state.description
        }
    
        await updateItem(this.props.userId, id, updatedItem);
        const items = await getAllItems(this.props.userId);
        this.setState({
            items: items
        })
    
        this.hideModal();
    
      }

    onItemFormChange = (event) => {
        const element = event.target
        const name = element.name
        let value = element.value
    
        const newState = {}
        newState[name] = value
    
        this.setState(newState)
        
    }

    onDeleteClick = async (event) => {
        event.preventDefault();
        const id = event.target.value;
        await deleteItem(this.props.userId, id);
        const items = await getAllItems(this.props.userId);
          this.setState({
            items: items
          })

        //   localStorage.clear();
    }

    eraseInputs = () => { 
        this.setState({
            name: '',
            category: '',
            description: '',
            image: ''
        });
      }

    render() {

        const allItems = this.state.items ?  this.state.items.map(item => {
            return (
                <div key={item.id}>
                   <h3 id={item.id} name={item.name} category={item.category}>{item.name}</h3>
                   <h3 id={item.id} name={item.name} category={item.category}>{item.category}</h3>
                   <p id={item.id} name={item.name} category={item.category}>{item.description}</p>
                   <img className='item-image' src={item.image} alt='item'/>
                    <button value={item.id} onClick={this.showModal}>Update</button> 
                    <button value={item.id} onClick={this.onDeleteClick}>Delete</button> 
                </div>
                
            )
        }): null;

        const modal = (this.state.show && this.state.updatedItem) ? 
            <div className='modal'>
              <section className="modal-content">
              <form onSubmit={this.onUpdateClick}>
                <label htmlFor='name'>
                  <input type='text' name='name' value={this.state.name} onChange={ this.onItemFormChange } required/>
                </label>
                <label htmlFor='category'>
                    <select value={this.state.category} onChange={this.handleTextInput} name='category' required>
                        <option value=''> select an option </option>
                        <option value='auto'>Auto</option>
                        <option value='utensils'>Utensils</option>
                        <option value='electronics'>Electronics</option>
                        <option value='aparrel'>Aparrel</option>
                        <option value='jewelry'>Jewelry</option>
                        <option value='housing'>Housing</option>
                        <option value='gaming'>Gaming</option>
                        <option value='services'>Services</option>
                        <option value='tools'>Tools</option>
                        <option value='furniture'>Furniture</option>
                        <option value='antiques'>Antiques</option>
                        <option value='junk'>Junk</option>
                    </select>
                  {/* <input type='text' name='category' placeholder={this.state.updatedItem.category} onChange={ this.onItemFormChange } required/> */}
                </label>

                <div>
                    <textarea name="description" rows="10" cols="30" value={this.state.description} onChange={this.handleTextInput}/>
                </div>

                <div>
                    {/* <input type='file' name='image' onChange={this.handleTextInput}/> */}
                    <input className='login-input' type='text' name='image' onChange={this.handleTextInput} value={this.state.image} required/>
                </div>

                <button type='submit'>Update Item</button>
              </form>
                <button onClick={this.hideModal}>Close</button>
              </section>
            </div> : null;

        return (
            <div>
                <form className='login-form' onSubmit={this.handleSubmitForm}>
                    <div>
                        <input value={this.state.name} className='login-input' type='text' name='name' onChange={this.handleTextInput} placeholder='Name' required/>
                    </div>

                    <div>
                        <select value={this.state.category} onChange={this.handleTextInput} name='category' required>
                            <option value=''> select an option </option>
                            <option value='auto'>Auto</option>
                            <option value='utensils'>Utensils</option>
                            <option value='electronics'>Electronics</option>
                            <option value='aparrel'>Aparrel</option>
                            <option value='jewelry'>Jewelry</option>
                            <option value='housing'>Housing</option>
                            <option value='gaming'>Gaming</option>
                            <option value='services'>Services</option>
                            <option value='tools'>Tools</option>
                            <option value='furniture'>Furniture</option>
                            <option value='antiques'>Antiques</option>
                            <option value='junk'>Junk</option>
                        </select>
                        {/* <input className='login-input' type='text' name='category' onChange={this.handleTextInput} placeholder='Category' required/> */}
                    </div>

                    <div>
                        <textarea value={this.state.description} name="description" rows="10" cols="30" onChange={this.handleTextInput} placeholder='Description...'/>
                    </div>

                    <div>
                        {/* <input type='file' name='image' onChange={this.handleTextInput}/> */}
                        <input value={this.state.image} className='login-input' type='text' name='image' onChange={this.handleTextInput} placeholder='Image URL' required/>
                    </div>

                    <button className='login-btn'>Create</button>
                </form>
                {allItems}

                 {modal}

                 <ChatBox />

            </div>
        )
    }
}

export default Dashboard;