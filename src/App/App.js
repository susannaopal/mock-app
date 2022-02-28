import React, { Component } from 'react';
import './App.css';
import ItemsContainer from '../ItemsContainer';
import { fetchAllItems } from '../apiCalls.js';

class App extends Component {
  constructor () {
    super()
    this.state = {
      inventory: [
        // { id: 18907224, name: 'Rope', type: 'toy', price: 14.99, numberAvailable: 3 },
        // { id: 18907228, name: 'Bone', type: 'snack', price: 1.99, numberAvailable: 13 }
        ]
    }
  }

  componentDidMount = () => {
    fetchAllItems()
    .then(data => this.setState({ inventory: data }))

  }

  render() {
    return (
      
      <>
      <div className="App">
        <h1 className='app-title title-colors'>BorkStop</h1>
        <h2 className='title-colors'>Your dog's one stop shop for toys and treats!</h2>
        <div>
          <ItemsContainer items={this.state.inventory}/>
        </div>
        <div>
        </div>
      </div>
      </>
    )
  }
}

export default App;