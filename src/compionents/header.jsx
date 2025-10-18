import React, {useContext} from 'react';
import {ThemeContext} from '../context/themecontext';
import {Link} from 'react-router-dom';


function header() {
    const {theme, toggleTheme} =useContext(ThemeContext);

  return (
    <div className={`header ${theme}`}>
        <h1>Movie Explorer</h1>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/watchlist'>Watchlist</Link>

        </nav>
        <button onClick={toggleTheme}>
            {Theme==='dark' ? 'switch to Light' : 'switch to Dark'}
        </button>
      
    </div>
  );
}

export default header
