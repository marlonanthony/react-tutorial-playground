import React, { Component } from 'react';
import Table from './components/Table'
import Form from './components/Form'
import './App.css';

class App extends Component {
  state = {
    characters: []
  }

  removeCharacter = props => {
    const { characters } = this.state 

    this.setState({
      characters: characters.filter((char, i) => {
        return i !== props 
      })
    })
  }

  handleSubmit = character => {
    this.setState({characters: [...this.state.characters, character]})
  }

  render() {
    return (
      <div className="App">
        <Form handleSubmit={this.handleSubmit}/>
        <Table 
          characterData={this.state.characters} 
          removeCharacter={this.removeCharacter}
        />
      </div>
    );
  }
}

export default App;
