import { Outlet, Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import useAuthContext from "../Context/authcontext";
import { useEffect } from "react";
import { scrollto } from "../Utils/functions";
import { Toaster } from 'react-hot-toast';
function Layout(){
  const { getUser, user, } = useAuthContext();
  useEffect(() => {
     if(user === null){
       getUser();
     }
  })
    return(
        <>
        <div><Toaster/></div>
   <nav className="navbar navbar-expand-lg shadow-sm fixed-top bg-white">
  <div className="container d-flex flex-row">
    <Link className="navbar-brand fw-bold" to="/">
     <img src="./logo/logo.png" alt="" className="logo"/>
    </Link>
    <Link className="ms-auto d-sm-none link nav-link" to="/search">
    <Icon icon="line-md:search" className="fs-1   nav-link"/>
    </Link>
    <button className="navbar-toggler border-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon " />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item mx-2">
          <NavLink className={({isActive}) => isActive ? "nav-link link-active c-primary" : "nav-link link-inactive"}  to="/">Home</NavLink>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link link-inactive" href="/#" onClick={() => scrollto('about')}>About</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link link-inactive" href="/#" onClick={() => scrollto('reviews')}>Reviews</a>
        </li>
        
        <li className="nav-item mx-2">
          <NavLink className={({isActive}) => isActive ? "nav-link link-active c-primary" : "nav-link link-inactive"} to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item mx-2">
          <NavLink className={({isActive}) => isActive ? "nav-link link-active c-primary" : "nav-link link-inactive"} to="/orders">My Applications</NavLink>
        </li>
        <li className="nav-item mx-2">
          <NavLink className={({isActive}) => isActive ? "nav-link link-active c-primary" : "nav-link link-inactive"} to="/favourites">Favourites</NavLink>
        </li>
        <li className="nav-item mx-2">
        <NavLink className="link d-flex flex-row align-items-center display-sm-none" to="/search">
        <Icon icon="line-md:search" className="fs-1  nav-link"/>
        <span className="nav-link fs-6">search</span>
        </NavLink>
        </li>
        {
          user === null ? <>
           <Link to="/login" className="link display-sm-none">
           <li className="nav-item mx-2">
            <button className="btn primary-bg text-white fs-12 py-2 px-3">Create Account</button>
        </li>
           </Link>
          </> : 
          <>
          <li className="nav-item mx-2">
           <Link className="link" to="/profile">
            <span className="nav-link fs-6">Profile</span>
           </Link>
        </li>
        <Link to="/pet-list" className="link display-sm-none">
           <li className="nav-item mx-2">
            <button className="btn primary-bg text-white fs-12 py-2 px-3">Find A Pet</button>
        </li>
           </Link>
          </>
        }
      </ul>
    </div>
  </div>
</nav>
<div>
    <Outlet />
</div>
        </>
    )
}
export default Layout;