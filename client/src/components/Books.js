import React, { Component } from "react";



export class Books extends Component {

    render() {
        let bookItems = this.props.books.map(book => {
            return <li>{book.title}</li>
        })
        console.log(this.props.books)

        return (
            <ul>{bookItems}</ul>
        )
    }
}