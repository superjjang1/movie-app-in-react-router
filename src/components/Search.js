// import React, {Component} from 'react';
// import axios from 'axios';
// import config from '../config';

// const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${config.api_key}`;


// class Search extends Component {
//     constructor() {
//         super();
//         this.state = {
//             searchTerm: ""
            
//         };
//     }
//     changeSearch(e){
//         const newVal = e.target.value;
//         this.props.changeFromParent(newVal);
//     }
//     search = (e)=>{
//         e.preventDefault();
//         const searchUrl =`/search/${this.state.searchTerm}`
//         //to programmatically move the browser to a new page
//         //the user
//         this.props.history.push(searchUrl);
//     }
//     render(){
//         return(
//             <div className='search-bar full-width'>
//                 <input type='text' onChange={this.changeSearch} value={this.props.search} placeholder='Search for a movie' />
//             </div>
//         )
//     }
// }
// export default Search;