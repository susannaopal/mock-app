import React, { Component } from 'react';
import './App.css';
import ItemsContainer from '../ItemsContainer';
import { fetchAllItems, postNewItem } from '../apiCalls.js';
import Form from '../Form.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      inventory: []
    }
  }

  componentDidMount = () => {
    fetchAllItems()
    .then(data => this.setState({ inventory: data }))
  }

  addNewItem = (addedItem) => {
    this.setState({ inventory: [...this.state.inventory, addedItem]})
    postNewItem(addedItem)
  }

  render() {
    return (
      
      <>
      <div className="App">
        <h1 className='app-title title-colors'>BorkStop</h1>
        <h2 className='title-colors'>Your dog's one stop shop for toys and treats!</h2>
        <div>
        <Form addNewItem={this.addNewItem} />
        </div>
        <div>
          <ItemsContainer items={this.state.inventory} />
        </div>
      </div>
      </>
    )
  }
}

export default App;