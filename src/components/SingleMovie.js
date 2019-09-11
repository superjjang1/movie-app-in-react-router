import React, {Component} from 'react';
import axios from 'axios';


class SingleMovie extends Component{
    constructor(){
        super();
        this.state={
            movieData:{}
        }
    }
    async componentDidMount(){
        const movieId = this.props.match.params.movieId;
        const resp = await axios.get()
        
    }
    render(){
        
        return(
            <h1>hi</h1>
        )
    }
}




export default SingleMovie;