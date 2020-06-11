import React, { Component } from "react";
import { NavLink } from "react-router-dom"
import "./BaseLayout.css"


class Nav extends Component {
    render() {
        return (
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/books">View All Books</NavLink></li>
                <li><NavLink to="add-book">Add a New Book</NavLink></li>
            </ul>
        )
    }
}

export class BaseLayout extends Component {
    render() {
        return (
            <div>
                <Nav />
                {this.props.children}
                <p>REGISTERED OPEN SOURCE!</p>
            </div>
        )
    }
}