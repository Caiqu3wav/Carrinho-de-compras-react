import React from 'react';

function Header() {
  return(
    
    <header className="header" style={{background: 'blue'}}>
      <div className="container">
        <form>
          <input type="search" placeholder="Pesquisar"className="search_input"/>
        
          <button type="submit" className="search_button">
            icone
          </button>
        </form>

      </div>
    </header>
  );
}

export default Header;
