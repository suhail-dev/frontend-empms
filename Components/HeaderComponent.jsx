  import React from 'react'
  import { NavLink } from 'react-router-dom'
  export const HeaderComponent = () => {
    return (
      <div>
          <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <a className="navbar-brand" href="https://www.google.com">Employee Management System</a>
              <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
         <NavLink className='navbar-brand' to='/employees'>Employees</NavLink>
         
        </li>
        <li className="nav-item">
         <NavLink className='navbar-brand' to='/departments'>Departments</NavLink>
         
        </li>
        
      </ul>
    </div>
          </nav>

          </header>
      </div>
    )
  }
