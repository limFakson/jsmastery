import React from 'react';

const MovieCard = ({movie})=>{
    return (
        <div className='movie'>
                <div>
                    <p>{movie.year}</p>
                </div>
                <div className="image">
                    <img src={movie.poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/400'} alt="poster" />
                </div>
                <div>
                    <span>{movie.Type}</span>
                    <h3>{movie.Title}</h3>
                </div>
            </div>
    );
}

export default MovieCard;