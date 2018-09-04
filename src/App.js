import React, { Component } from 'react';
import './App.css';
import CircleSelector from './CircleSelector/CircleSelector';
import Circles from './Circles/Circles';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: '1'
    }
  }

  handleButtonClick = (e) => {
    this.setState({
      selected: e.target.id
    })
    console.log(e.target.id);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">PROJECT 4 ASSESSMENT</header>
        <main>
          <CircleSelector 
            handleButtonClick={this.handleButtonClick}
            selected={this.state.selected}
            />
          <Circles 
            selected={this.state.selected}
          />
        </main>
      </div>
    );
  }
}

export default App;