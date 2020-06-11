
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Books } from "./components/Books"

class App extends Component {

  constructor() {
    super()
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/books")
    .then(response => response.json())
      .then(result => {
        console.log(result)
        this.setState({
         books: result
      })
    })
  }

  render() {
    return (
      <Books books = {this.state.books} />
    )
  }
}

export default App;