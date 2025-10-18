import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {removeWatch} from '../redux/movieslice'

function watchlist() {
    const dispatch= useDispatch();
    const list = useSelector(s => s.watchlist);

  return (
    <div className='watchlist-page'>
        <h2>Your Watchlist</h2>
        <div className="movie-grid">{list.map(m => (
                <div key={m.imdbID} className="movie-card">
                    <img src={m.Poster}alt="m.Title" />
                    <div className="movie-title">{m.Title}</div>
                    <div className="movie-year">{m.Year}</div>
                    <button onClick={() => dispatch(removeWatch(m.imdbID))}>Remove</button>
                </div>
        ))}</div>
      
    </div>
  )
}

export default watchlist
