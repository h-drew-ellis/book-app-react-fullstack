import React, { Component } from 'react';
import AddBook from "./components/AddBook"
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state ={

    }
  }
  componentDidMount(){
    fetch('http://localhost:3001/')
    .then(response => response.json())
    .then(result => {
      this.setState({

      })
    })
  }

  render(){
    return (

    )
  }
}

export default App;
