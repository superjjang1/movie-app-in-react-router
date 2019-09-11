import React from 'react';
import {Link} from 'react-router-dom';

function Movie(props){
    const imagePath=`http://image.tmdb.org/t/p/w300${props.movie.poster_path}`;
    return(
        <div className="col s5 m3">
            <div className="row">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            <div className="card">
            <Link to={`/movie/${props.movie.id}`}> 
            <img src={imagePath} alt={props.movie.title}/>
            </Link>
            <h4> 
            {props.movie.title}
            </h4>
            
            <br/>
            Release Date: {props.movie.release_date}
            </div>
            </div>
        </div>
    )
}

export default Movie;