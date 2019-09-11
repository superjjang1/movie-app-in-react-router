import React, {Component} from 'react';
import axios from 'axios';
import config from '../config';


class SingleMovie extends Component{
    constructor(){
        super();
        this.state={
            movieData:{}
        }
    }
    async componentDidMount(){
        const movieId = this.props.match.params.movieId;
        const thisMovieDetail = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${config.api_key}`;
        const resp = await axios.get(thisMovieDetail)
        console.log(resp.data);
        this.setState({
            movieData: resp.data
        })
    }
    render(){
        if(this.state.movieData.id === undefined){
            return(<h1>loading....</h1>)
        }

        
        return(
            <div className="container"> 
            <img src={`http://image.tmdb.org/t/p/w300${this.state.movieData.production_companies[0].logo_path}`} alt={this.state.movieData.title} />
            <h1>{this.state.movieData.title}</h1>
            <h1>{this.state.movieData.tagline}</h1>
            </div>
        )
    }
}




export default SingleMovie;