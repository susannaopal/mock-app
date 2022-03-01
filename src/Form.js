import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      type: '',
      price: '',
      numberAvailable: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitForm = (event) => {
    event.preventDefault()
    const newItemAdded = {
      id: Date.now(),
      ...this.state
    }
    this.props.addNewItem(newItemAdded)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({ 
      name: '',
      type: '',
      price: '',
      numberAvailable: ''
    })
  }

  render() {
    return (
      
        <form>
        <label htmlFor="name">Item name:</label>
          <input 
            type="text"
            name='name'
            value={this.state.name}
            onChange={event => this.handleChange(event)}
          />
          <label htmlFor="name">Type:</label>
          <input 
            type="text"
            name='type'
            value={this.state.type}
            onChange={event => this.handleChange(event)}
          />   
          <label htmlFor="name">Price:</label>
          <input 
            type="number"
            name='price'
            value={this.state.price}
            onChange={event => this.handleChange(event)}
          />
          <label htmlFor="name">Available:</label>
          <input 
            type="number"
            name='numberAvailable'
            value={this.state.numberAvailable}
            onChange={event => this.handleChange(event)}
          />
          <button onClick={event => this.submitForm(event)}>Submit Item</button>
        </form>
    )
  }
  }
export default Form;

          //attempt to create a proper drop down
          // <label>
          // Select Type:
          // <select value={this.state.type} onChange={event => this.handleChange(event)}>
          //   <option value="toy">Toy</option>
          //   <option value="treat">Treat</option>
          // </select>
          //  </label>