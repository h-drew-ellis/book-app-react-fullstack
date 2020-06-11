import React, { Component } from "react";

export class AddBook extends Component {
    constructor() {
        super()

        this.state = {
            title: "",
            genre: "",
            publisher: "",
            year: 0,
            imageURL: "",
            message: ""
        }
    }

    handleTextBoxChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        this.setState({
            message: this.state.title + " was susccessfully added!"
        })

        const book = {
            title: this.state.title,
            genre: this.state.genre,
            publisher: this.state.publisher,
            year: this.state.year,
            imageURL: this.state.imageURL
        }
        console.log(book)
        fetch("http://localhost:3001/add-book", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(book)
        })

    }
    
    render() {

        // const book = this.state.book
        
        return (
            <div>
                <h1>Add Book</h1>
                <input name="title" type="text" placeholder = "Title" onChange={this.handleTextBoxChange} />
                <input name="genre" type="text" placeholder = "Genre" onChange={this.handleTextBoxChange} />
                <input name="publisher" type="text" placeholder = "Publisher" onChange={this.handleTextBoxChange} />
                <input name="year" type="text" placeholder = "Year" onChange={this.handleTextBoxChange} />
                <input name="imageUrl" type="text" placeholder = "ImageURL" onChange={this.handleTextBoxChange} />
                <button onClick={this.handleSubmit}>Add Book</button>
                <h1>{this.state.message}</h1>
            </div>
        )
    }

}