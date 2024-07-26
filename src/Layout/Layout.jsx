import { Outlet, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import useAuthContext from "../Context/authcontext";
import { useEffect } from "react";
function Layout(){
  const { getUser, user } = useAuthContext();
  useEffect(() => {
     if(user === null){
       getUser();
     }
  })
    return(
        <>
                <nav className="navbar navbar-expand-lg shadow-sm fixed-top bg-white">
  <div className="container d-flex flex-row">
    <Link className="navbar-brand fw-bold" to="/">PetHaven</Link>
    <Link className="ms-auto d-sm-none link nav-link" to="/search">
    <Icon icon="line-md:search" className="fs-1   nav-link"/>
    </Link>
    <button className="navbar-toggler border-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon " />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item mx-2">
          <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" to="#/about">About</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item mx-2">
        <Link className="link d-flex flex-row align-items-center display-sm-none" to="/search">
        <Icon icon="line-md:search" className="fs-1  nav-link"/>
        <span className="nav-link">search</span>
        </Link>
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
          <li className="nav-item mx-2 display-sm-none">
           <Link className="link" to="/profile">
            <span className="nav-link">Profile</span>
           </Link>
        </li>
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