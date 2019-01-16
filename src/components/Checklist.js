import React from 'react';
import { starWarsMovieList } from '../constants/index';
import ChecklistRow from './ChecklistRow';
/**
 * Check list will map out the movies
 * 
 */
const Checklist = () => {
    return (
        <table id="checklist-table" className="border">
        <thead>
            <tr className="border">
                <th>Edit</th>
                <th>Movie Title</th>
            </tr>
        </thead>
        <tbody>
            {starWarsMovieList.map((movie, index) => {
                return (
                    <ChecklistRow key={index} movie={movie}/>
                )
            })}
        </tbody>
        </table>
    )
}

export default Checklist;

