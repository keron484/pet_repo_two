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
      window.location.reload();
      toast.success("User succesfully logout")
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
         <link rel="canonical" href="https://pethaven.com/" />
         <meta property="og:title" content="PetHaven - Your Ultimate Pet Adoption Service" />
         <meta property="og:description" content="Welcome to PetHaven! Discover your perfect furry friend. Join us in giving pets a loving home." />
         <meta property="og:image" content="https://yourwebsite.com/images/logo.jpg" /> 
         <meta property="og:url" content="https://pethaven.com/" />
         <meta property="og:type" content="website" />
         <meta name="twitter:card" content="summary_large_image" />
         <meta name="twitter:title" content="PetHaven - Your Ultimate Pet Adoption Service" />
         <meta name="twitter:description" content="Welcome to PetHaven! Discover your perfect furry friend. Join us in giving pets a loving home." />
         <meta name="twitter:image" content="https://yourwebsite.com/images/logo.jpg" /> 
         <meta name="twitter:url" content="https://pethaven.com/" />
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
               <div className="contact-box">
               <div className="alert alert-warning mt-5">
                it appears your logged out click the button below to login
               </div>
               <Link className="link w-100" to="/login">
               <button className="btn btn-success w-100">
                Login
               </button>
               </Link>
               </div>
               </>
          ) : (
            <>
            <div className="pt-5 pb-xl container">
            <div className="rounded-3 border-none py-2 mt-5">
              <h1 className="fs-5 text-center fw-bold ">My Account</h1>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-center my-2">
              <div className="profile-img">
                <img src="" alt="" />
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
                    <Icon icon="gravity-ui:chevron-right" className="fs-5" />
                  </p>
                </div>
                <div className="d-flex flex-row align-items-center mx-2  justify-content-between my-1">
                  <p className="fw-bolder">Delete Account</p>
                  <p>
                    <Icon icon="gravity-ui:chevron-right" className="fs-3" />
                  </p>
                </div>
                <div className="d-flex flex-row align-items-center mx-1 justify-content-between py-2" onClick={() => {
                   handle_logout();
                }}>
                  <p className="my-0">Logout</p>
                  <button className="btn badge">
                    <Icon icon="tabler:logout" className="fs-2 c-red" />
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