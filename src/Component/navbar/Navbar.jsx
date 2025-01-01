import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'

export default function Navbar() {
  return (
    <>
   <nav className={`navbar navbar-expand-lg text-uppercase fixed-top ${style.navbarcl}`}>
  <div className="container">
    <a className="navbar-brand fw-semibold" href="#">Categories Products</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className={`nav-link ${style.link}`}  to={'/'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${style.link}`}  to={'/Categories'}>Categories</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${style.link}`} to={'/Products'}>Products</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${style.link}`} to={'/Addproduct'}>Addproduct</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${style.link}`} to={'/Quotes'}>Quotes</Link>
        </li>
       
        
      </ul>
      
    </div>
  </div>
</nav>

    </>
  )
}
