import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import'./searchbar.css';

function SearchBar() {

  const [searchValue, setSearchValue] = useState('');

  return(
    <form className='searchBar'>
      <input type="search" value={searchValue} placeholder="Pesquisar"className="search_input" onChange={ ({ target }) => setSearchValue(target.value) } required/>
      { searchValue }
      <button type="submit" className="search_button">
        <FaSearch />
      </button>
    </form>
  );
}

export default SearchBar;
