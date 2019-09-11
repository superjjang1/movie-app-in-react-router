import React, {Component} from 'react';
import axios from 'axios';
import config from '../config';
import Movie from './Movie';



class SearchPage extends Component {
    constructor() {
        super();
        this.state = {
            movieList: [],
            searching: ''
            
        };
    }
    async componentDidMount() {
        const searchTerm = this.props.match.params.searchTerm;
        console.log(searchTerm);
        const searchUrl = `https://api.themoviedb.org/3/search/movie/?api_key=${config.api_key}&query=${searchTerm}`;
        await axios.get(searchUrl)
            .then((resp)=>{
                const movieResults = resp.data.results;
                console.log(movieResults);
                this.setState({
                    movieList: [movieResults],
                    searching: searchTerm
                })
                console.log(this.state.movieResults)
            })

    }
    render(){
        const filteredMovies = this.state.movieList.filter( movie=>
            movie.title.toLowerCase().includes(this.state.searching.toLowerCase()));
        const movies = filteredMovies.map((movie,i)=>
            <Movie key={i} keys={i} movie={movie}/>
        )
        return(
            <div>
                <div className= "col s12">
                    <h2>Searching for : {this.state.searching}</h2>
                    {movies}
                </div>
            </div>
        )
    }
}
export default SearchPage;