import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Search from './Search';

class NavBar extends Component{
    constructor(){
        super();
        this.state = {searchTerm: ""}
    }
    changeSearch = (e)=>{
        e.preventDefault()
        const newVal = e.target.value
        this.setState({searchTerm: newVal})
    }
    search = (e)=>{
        e.preventDefault();
        const searchUrl = `/search/${this.state.searchTerm}`
        // to programmatically move the browser to a new page
        this.props.history.push(searchUrl);
    }
    render(){
        return(
            <nav className="navbar"> 
            <a className="navbar-brand" href="/">Movie Route </a>
            
                <form onSubmit={this.search}>
                    <input onChange={this.changeSearch} type="text" value={this.state.searchTerm} placeholder="ENter a movie Title" />
                    <input type="submit" value="Search!" />
                </form>
           
            </nav>
        )
    }
}


export default NavBar;