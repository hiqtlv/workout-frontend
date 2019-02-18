import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => (
    <header>
      <nav>
        <ul>
          <p><Link to='/'>Home</Link></p>
          <p><Link to='/inputSession'>Add workout</Link></p>
          <p><Link to='/report'>Reports</Link></p>
        </ul>
      </nav>
    </header>
  )

  export default Header
