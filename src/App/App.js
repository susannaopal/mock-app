import React, { Component } from 'react';
import './App.css';
import Container from './Container.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      inventory: [{ id: 18907224, name: 'Rope', type: 'toy', price: 14.99, numberAvailable: 3 }]
    }
  }

  render() {
    return (
      <>
      <div className="App">
        <h1 className='app-title title-colors'>BorkStop</h1>
        <h2 className='title-colors'>Your dog's one stop shop for toys and treats!</h2>
        <div>
          <Container />
        </div>
        <div>
          
        </div>
      </div>
      </>
    )
  }
}

export default App;