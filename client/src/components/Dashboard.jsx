import React, { Component } from 'react';
import { createItem, getAllItems, getItem, updateItem, deleteItem} from '../services/itemService';
import ChatBox from './ChatBox';

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
                <div key={item.id} className='item-container'>
                   <h3 id={item.id} className='item-name' name={item.name} category={item.category}>{item.name}</h3>
                   <h3 id={item.id} className='item-category' name={item.name} category={item.category}>{item.category}</h3>
                   <img className='item-image' src={item.image} alt='item'/>
                   <button className='crud-button' value={item.id} onClick={this.showModal}>Update</button> 
                    <button className='crud-button' value={item.id} onClick={this.onDeleteClick}>Delete</button> 
                   <p id={item.id} className='item-desc' name={item.name} category={item.category}>{item.description}</p>
                </div>
                
            )
        }): null;

        const modal = (this.state.show && this.state.updatedItem) ? 
            <div className='modal'>
              <section className="modal-content" id='modal-content-id'>
              <form onSubmit={this.onUpdateClick}>
                <label htmlFor='name'>
                  <input type='text' className='create-input' name='name' value={this.state.name} onChange={ this.onItemFormChange } required/>
                </label>
                <label htmlFor='category'>
                    <select  className='create-select' value={this.state.category} onChange={this.handleTextInput} name='category' required>
                        <option value=''> select an option </option>
                        <option value='auto'>Auto</option>
                        <option value='utensils'>Utensils</option>
                        <option value='electronics'>Electronics</option>
                        <option value='apparel'>Apparel</option>
                        <option value='jewelry'>Jewelry</option>
                        <option value='housing'>Housing</option>
                        <option value='gaming'>Gaming</option>
                        <option value='services'>Services</option>
                        <option value='tools'>Tools</option>
                        <option value='furniture'>Furniture</option>
                        <option value='antiques'>I'm a total square</option>
                        <option value='junk'>Junk</option>
                    </select>
                </label>

                <div>
                    <textarea name="description" className='create-textarea' rows="10" cols="30" value={this.state.description} onChange={this.handleTextInput}/>
                </div>

                <div>
                    <input className='create-input' type='text' name='image' onChange={this.handleTextInput} value={this.state.image} required/>
                </div>

                <button className='update-btn create-button' type='submit'>Update</button>
              </form>
                <button className='cancel-btn create-button' onClick={this.hideModal}>Close</button>
              </section>
            </div> : null;

        return (
            <div>
                <form className='create-form' onSubmit={this.handleSubmitForm}>
                    <div>
                        <input value={this.state.name} className='create-input' type='text' name='name' onChange={this.handleTextInput} placeholder='Name' required/>
                    </div>

                    <div>
                        <select className='create-select' value={this.state.category} onChange={this.handleTextInput} name='category' required>
                            <option value=''> select an option </option>
                            <option value='auto'>Auto</option>
                            <option value='utensils'>Utensils</option>
                            <option value='electronics'>Electronics</option>
                            <option value='apparel'>Apparel</option>
                            <option value='jewelry'>Jewelry</option>
                            <option value='housing'>Housing</option>
                            <option value='gaming'>Gaming</option>
                            <option value='services'>Services</option>
                            <option value='tools'>Tools</option>
                            <option value='furniture'>Furniture</option>
                            <option value='antiques'>Antiques</option>
                            <option value='junk'>Junk</option>
                        </select>
                    </div>

                    <div>
                        <textarea className='create-textarea' value={this.state.description} name="description" rows="10" cols="30" onChange={this.handleTextInput} placeholder='Description...'/>
                    </div>

                    <div>
                        <input value={this.state.image} className='create-input' type='text' name='image' onChange={this.handleTextInput} placeholder='Image URL' required/>
                    </div>

                    <button className='create-button'>Create</button>
                </form>
                
                 <ChatBox username={this.props.username}/>

                

                <div className='items-container'>
                    {allItems}
                </div>
                 
                {modal} 


            </div>
        )
    }
}

export default Dashboard;