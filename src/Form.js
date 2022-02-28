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

  render() {
    return (
      <div className='form'>
        <form>
          <label htmlFor="name">Item name:</label>
          <input id="myInput" 
            type="text"
            name='name'
            value={this.state.name}
            onChange={event => this.handleChange(event)}
          />
          <label htmlFor="type">Type:</label>
          <select value={this.state.item} onChange={event => this.handleChange(event)}>
           <option name='toy' value="toy">Toy</option>
           <option name='treat' value="treat">Treat</option>
           </select>
           <label htmlFor="price">Price:</label>
          <input id="myInput" 
            type="text"
            name='price'
            value={this.state.price}
          />
          <label htmlFor="numberAvailable">Available:</label>
          <input id="myInput" 
            type="text"
            name='numberAvailable'
            value={this.state.numberAvailable}
            onChange={event => this.handleChange(event)}
          />
          <button>Submit Item</button>
        </form>
      </div>
    )
  }
  }


export default Form;

// { id: 18907224, name: 'Rope', type: 'toy', price: 14.99, numberAvailable: 3 }