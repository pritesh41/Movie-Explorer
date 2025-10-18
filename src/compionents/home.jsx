import React, {useState , useRef, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setResult} from '../redux/movieslice';


function home() {
    const dispatch= useDispatch();
    const results = useSelector(s=>
        s.results
    )
    const [query, setQuery] = useState('');
    const inputRef= useRef();
    useEffect(() =>{
        inputRef.current.focus();
    },[]);
    
    const searchMovies= async (q) => {
        if(!q) return;
        const res= await fetch(`http://www.omdbapi.com/?apikey=8dee4e72&s=${q}`);
        const data= await res.json();
        dispatch(setResult(data.Search ||[]))
    };

  return (
    <div className='Home'>
        <div className="search-bar">
            <input ref={inputRef} type='text' value={query} onChange={e => 
                setQuery(e.target) } placeholder='enter movie name...'/>
                <button onClick={searchMovies(query)}>Search</button>
        </div>
        <div className="movie-grid">
            {result.map(m => (
                <div key={m.imdbID} className="movie-card">
                    <img src={m.Poster}alt="m.Title" />
                    <div className="movie-title">{m.Title}</div>
                    <div className="movie-year">{m.Year}</div>
                    <button onClick={() => dispatch(addWatch(m))}>Add to Watchlist</button>
                </div>
            ))}
        </div>

      
    </div>
  )
}

export default home
