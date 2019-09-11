// import React, {Component} from 'react'


// class NavBar extends Component{
//     constructor(){
//         super();
//         this.state = {searchTerm:""}
//     }
//     changeSearch= (e) => {
//         this.setState({
//             searchTerm: e.target.value
//         })
//     }
//     Search = (e) =>{
//         e.preventDefault();
//         const searchUrl = `/search/${this.state.searchTerm}`
//         this.props.history.push(searchUrl);
//     }
//   render(){
//     return(
// 		<nav className="navbar">
// 		  <div className="container-fluid">
// 		    <div className="navbar-header">
// 		      <a className="navbar-brand" href="/">Movie Route </a>
              
// 		    </div>
// 		    <ul className="nav navbar-nav">
//                 <form onSubmit={this.search}>
// 		      	        <input onChange={this.changeSearch} value={this.state.searchTerm} placeholder="enter a search term"/>
//                       <input type="submit" value="search!"/>
//                 </form>
		      	
				
// 		    </ul>
// 		  </div>
// 		</nav>    
// 	)
//   }
// }

// export default NavBar
  
import React, { Component } from 'react';

class NavBar extends Component{
    constructor(){
        super();
        this.state = {searchTerm: ""}
    }
    changeSearch = (e)=>{
        this.setState({searchTerm: e.target.value})
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