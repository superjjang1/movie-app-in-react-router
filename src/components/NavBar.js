import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class NavBar extends Component{
  render(){
    return(
		<nav className="navbar">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <a className="navbar-brand" href="#">Movie Route</a>
		    </div>
		    <ul className="nav navbar-nav">
		    	<li className="#81d4fa light-blue lighten-3"><Link to="/">Home</Link></li>
		      	<li className="#81d4fa light-blue lighten-3"><Link to="/">Movies</Link></li>
		      	<li className="#81d4fa light-blue lighten-3"><Link to="/">Search</Link></li>
		      	<li className="#81d4fa light-blue lighten-3"><Link to="/movie/:movieId">SingleMovie</Link></li>
				
		    </ul>
		  </div>
		</nav>    
	)
  }
}

export default NavBar