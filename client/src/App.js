
import React, { Component } from 'react';
import './App.css';
import { Books } from "./components/Books"
/*import { AddBook } from "./components/AddBook"
import { BaseLayout} from "./components/BaseLayout"
import { BookDetails } from "./components/BookDetails"*/

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