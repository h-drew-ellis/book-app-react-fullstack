import React, { Component } from "react"

class AddBook extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            author: '',
            genre: '',
            year: '',
            img: ''

        };
    }

    addBookDetails = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render(){
        return (
            <div>
                <input name='title' placeholder="Name of Book" onChange={this.addBookDetails} />
                <input name='author' placeholder="Name of Author" onChange={this.addBookDetails} />
                <input name='genre' placeholder="Genre" onChange={this.addBookDetails} />
                <input name='year' placeholder="Year Book was Released" onChange={this.addBookDetails} />
                <input name='img' placeholder="Please place ImgURL" onChange={this.addBookDetails} />
            </div>
        )
    }
}
