import { useState, useEffect } from "react";
import axios from "../Api/axios";
import { Spinnerlong } from "../Components/Spinner";
import { Link } from 'react-router-dom';
import { Icon } from "@iconify/react";
import { formatDate } from "../Utils/functions";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
function Profile(){
  const [user, setUser] = useState(null);
  const [isloading, setIsloading] = useState(true)
  useEffect(() => {
    if (user == null) {
      const getUser = async () => {
        const token = localStorage.getItem("token");
        try {
          const response = await axios.get("api/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data.auth_user);
          setIsloading(false);
        } catch {
          setIsloading(false);
        }
      };
      getUser();
    }
  }, [user]);
  const handle_logout = async () => {
     try{
       await axios.post('api/logout-user',  {
        headers:{
           Authorization: `Bearer ${localStorage.getItem('token')}`
        }
       });
      toast.success("User succesfully logout");
      setUser((prevalue) => prevalue = null);
     }
     catch(e){
       toast.error("Opps something went wrong please try again");
     }
  }
    return(
        <>
                <Helmet>
        <meta charSet="utf-8" />
         <title>My Account</title>
         <link rel="canonical" href="https://petpalsadoption.com/" />
         <meta property="og:title" content="Petpalsadoption - Your Ultimate Pet Adoption Service" />
         <meta property="og:description" content="Welcome to Petpalsadoption! Discover your perfect furry friend. Join us in giving pets a loving home." />
         <meta property="og:image" content="https://yourwebsite.com/images/logo.jpg" /> 
         <meta property="og:url" content="https://petpalsadoption.com/" />
         <meta property="og:type" content="website" />
         <meta name="twitter:card" content="summary_large_image" />
         <meta name="twitter:title" content=" Petpalsadoption - Your Ultimate Pet Adoption Service" />
         <meta name="twitter:description" content="Welcome to Petpalsadoption! Discover your perfect furry friend. Join us in giving pets a loving home." />
         <meta name="twitter:image" content="https://petpalsadoption.com/images/logo.jpg" /> 
         <meta name="twitter:url" content="https://petpalsadoption.com/" />
        </Helmet>
            <>
     {isloading ? (
        <>
        <div className="contact-box">
        <Spinnerlong />
        </div>
        </>
     ):(
      <>
        {
          user == null ? (
               <>
               <div className="container pt-5 mt-5">
               <div className="contact-box">
               <div className="alert alert-warning mt-5">
                it appears your logged out click the button below to login
               </div>
               <Link className="link w-100" to="/login">
               <button className="primary-bg py-2 border-none rounded-3 shadow-sm fw-bold text-white w-100">
                Login
               </button>
               </Link>
               </div>
               </div>
               </>
          ) : (
            <>
            <div className="pt-5 pb-xl container">
            <div className="rounded-3 border-none py-2 mt-5">
              <h1 className="fs-5 text-center fw-bold ">My Account</h1>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-center my-2">
              <div className="profile-img d-flex flex-row align-items-center justify-content-center">
                {
                  user.profile_picture === null || '' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="10rem" height="10rem" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="#d4d4d4" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M8.5 9.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m9.758 7.484A7.99 7.99 0 0 1 12 20a7.99 7.99 0 0 1-6.258-3.016C7.363 15.821 9.575 15 12 15s4.637.821 6.258 1.984"/></g></svg>
                  ) : (
                    <img src={null} alt="my-picture" className="object-fit-cover"/>
                  )
                }
              </div>
            </div>
            <div className="pb-xxl">
              <h2 className="fs-6  mb-2 mt-4 mx-2 fw-bold">Personal Details</h2>
              <div className="card w-100 px-3 py-2 primary-bg  rounded-3 text-white border-none">
                <div className="d-flex flex-row align-items-center  mx-2 justify-content-between my-2 ">
                  <p className="fw-bolder">Account ID</p>
                  <p>{user.id}</p>
                </div>
                <div className="d-flex flex-row align-items-center  mx-2 justify-content-between my-2">
                  <p className="fw-bolder">Name</p>
                  <p>{user.name}</p>
                </div>
                <div className="d-flex flex-row align-items-center mx-2  justify-content-between my-2">
                  <p className="fw-bolder">Email</p>
                  <p>{user.email}</p>
                </div>
                <div className="d-flex flex-row align-items-center mx-2  justify-content-between my-2">
                  <p className="fw-bolder">Date of creation</p>
                  <p>{formatDate(user.created_at)}</p>
                </div>
              </div>
              <h2 className="fs-6 mx-2 my-3 fw-bold">System settings</h2>
              <div className="card w-100 px-2 border-none primary-bg  rounded-3 text-white py-2">
                <div className="d-flex flex-row align-items-center mx-2  justify-content-between my-1">
                  <p className="fw-bolder">Change Password</p>
                  <p>
                    <Icon icon="gravity-ui:chevron-right" className="fs-3" />
                  </p>
                </div>
                <div className="d-flex flex-row align-items-center mx-2  justify-content-between my-1">
                  <p className="fw-bolder">Delete Account</p>
                  <p>
                    <Icon icon="gravity-ui:chevron-right" className="fs-3" />
                  </p>
                </div>
                <div className="d-flex flex-row align-items-center mx-1 justify-content-between py-2 pointer" onClick={() => {
                   handle_logout();
                }}>
                  <p className="my-0 fw-bolder">Logout</p>
                  <button className="btn badge">
                    <Icon icon="tabler:logout" className="fs-3 c-red" />
                  </button>
                </div>
              </div>
            </div>
          </div>

            </>
          )
        }
      </> 
     )
    }
    </>
        </>
    )
}
export default Profile;