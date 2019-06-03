import React, { Component } from 'react';
import { createItem, getAllItems, getItem, updateItem, deleteItem} from '../services/itemService';

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            items: [],
            name: '',
            category: '',
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
            category: category
          }
    
        await createItem(this.props.userId, item);
        const items = await getAllItems(this.props.userId);
        this.setState({
            items: items
        })
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
          category: this.state.category
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
    }


    render() {

        const allItems = this.state.items.map(item => {
            return (
                <div key={item.id}>
                   <h3 id={item.id} name={item.name} category={item.category}>{item.name}</h3>
                    <button value={item.id} onClick={this.showModal}>Update</button> 
                    <button value={item.id} onClick={this.onDeleteClick}>Delete</button> 
                </div>
                
            )
        })

        const modal = (this.state.show && this.state.updatedItem) ? 
            <div className='modal'>
              <section className="modal-content">
              <form onSubmit={this.onUpdateClick}>
                <label htmlFor='name'>
                  <input type='text' name='name' placeholder={this.state.updatedItem.name} onChange={ this.onItemFormChange }/>
                </label>
                <label htmlFor='category'>
                  <input type='text' name='category' placeholder={this.state.updatedItem.category} onChange={ this.onItemFormChange }/>
                </label>
                <button type='submit'>Update Item</button>
              </form>
                <button onClick={this.hideModal}>Close</button>
              </section>
            </div> : null;

        return (
            <div>
                <form className='login-form' onSubmit={this.handleSubmitForm}>
                    <div>
                        <input className='login-input' type='text' name='name' onChange={this.handleTextInput} placeholder='Name'/>
                    </div>

                    <div>
                        <input className='login-input' type='text' name='category' onChange={this.handleTextInput} placeholder='Category'/>
                    </div>

                    <button className='login-btn'>Create</button>
                </form>
                {allItems}

                 {modal}
            </div>
        )
    }
}

export default Dashboard;