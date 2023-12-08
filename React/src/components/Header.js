import React from 'react'
import './Header.css'

const Header = () => {
  return (
    
      <div className="headerc">
          <a id="hiddenLink" className="pagelink" href="pages/tests.html">--tests--</a>
          <p id="trigger">0123456789</p>
          <p id="homeLink" style={{ marginLeft: '10px' }}> // home</p>
     </div>
    
  )
}

export default Header;

