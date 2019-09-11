import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from'./components/Home';
import NavBar from './components/NavBar';
import SingleMovie from './components/SingleMovie';
// import Search from './components/Search';
import SearchPage from './components/SearchPage';



class App extends Component{
  render(){
    return(
      <Router>
        <div className="container #81d4fa light-blue lighten-3">
          <Route path='/' component={NavBar}/>
          <div className="row"> 
            <Route exact path='/' component={Home}/>
            <br/>
            <br/>
            <br/>
            <Route path="/movie/:movieId" component={SingleMovie}/>
            <Route path="/search/:searchTerm" component={SearchPage}/>
          </div> 
        </div>
      </Router>
      
    )
  }
}

export default App;