import React from 'react';
import {starWarsMovieList} from '../constants/index';

/**
 * Check list will map out the movies
 * 
 */
const Checklist = () => {
    return(
        <div>
            {starWarsMovieList.map((movie, index) => {
                return (
                    <div key={index}>
                        <p className="gothic-font">{movie}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Checklist;

