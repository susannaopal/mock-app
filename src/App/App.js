import React, { Component } from 'react';
import './App.css';
import ItemsContainer from './ItemsContainer';

class App extends Component {
  constructor () {
    super()
    this.state = {
      inventory: [{ id: 18907224, name: 'Rope', type: 'toy', price: 14.99, numberAvailable: 3 }]
    }
  }

  render() {
    return (
      
      <div className="App">
        <h1 className='app-title title-colors'>BorkStop</h1>
        <h2 className='title-colors'>Your dog's one stop shop for toys and treats!</h2>
        <div>
          <ItemsContainer />
        </div>
        <div>
          
        </div>
      </div>
    )
  }
}

export default App;