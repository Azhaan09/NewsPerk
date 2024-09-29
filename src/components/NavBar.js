import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = () =>{
    return (
      <div className='sticky-top'>
        <nav className={`navbar navbar-expand-lg navbar-dark ${styles.bg}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><span className={`${styles.font_styling1}`}>News</span><span className={`${styles.font_styling2}`}>Perk</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item mx-2"><Link className="nav-Link" style={{textDecoration: 'none', fontSize: '18px', color: '#c0b1cc'}} to="/">Home</Link></li>
        <li className='nav-item  mx-2'><Link className='nav-Link' style={{ textDecoration: 'none', color: '#eddcfc'}} to='/business'>Business</Link>  </li>
        <li className='nav-item  mx-2'><Link className='nav-Link' style={{ textDecoration: 'none', color: '#eddcfc'}} to='/entertainment'>Entertainment</Link>  </li>
        <li className='nav-item  mx-2'><Link className='nav-Link' style={{ textDecoration: 'none', color: '#eddcfc'}} to='/health'>Health</Link>  </li>
        <li className='nav-item  mx-2'><Link className='nav-Link' style={{ textDecoration: 'none', color: '#eddcfc'}} to='/science'>Science</Link>  </li>
        <li className='nav-item  mx-2'><Link className='nav-Link' style={{ textDecoration: 'none', color: '#eddcfc'}} to='/sports'>Sports</Link>  </li>
        <li className='nav-item  mx-2'><Link className='nav-Link' style={{ textDecoration: 'none', color: '#eddcfc'}} to='/technology'>Technology</Link>  </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }

export default NavBar
