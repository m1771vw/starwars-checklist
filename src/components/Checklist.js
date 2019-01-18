import React from 'react';
import { starWarsMovieList, STAR_WARS_IX } from '../constants/index';
import ChecklistRow from './ChecklistRow';

const Checklist = () => {
    return (
        <div className="full-height relative overflow-auto">
            <table id="checklist-table" className="border margin-lr-auto absolute-center">
            <thead>
                <tr className="border">
                    <th></th>
                    <th>Movie Title</th>
                </tr>
            </thead>
            <tbody>
                {starWarsMovieList.map((movie, index) => {
                    return (
                        <ChecklistRow key={index} movie={movie} disabled={false}/>
                    )
                })}
                <ChecklistRow movie={STAR_WARS_IX} disabled={true} />
            </tbody>
            </table>
        </div>
    )
}

export default Checklist;

