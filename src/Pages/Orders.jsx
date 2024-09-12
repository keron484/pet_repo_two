import React, { useState, useEffect, Suspense  } from "react";
import Allorders from "../Components/Allorders";
import axios from "../Api/axios";
import { Spinnerlong } from "../Components/Spinner";
import { Helmet } from "react-helmet";
const Approvedorders = React.lazy(() => import('../Components/Approvedorders'));
const Pendingorders = React.lazy(() => import('../Components/Pendingorders'));
function Orders(){
    const [ isSelected, setisSelected ] = useState('all');
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
    return(
        <>
        <Helmet>
        <meta charSet="utf-8" />
         <title>Petlist</title>
         <link rel="canonical" href="https://petpalsadoption.com/" />
         <meta property="og:title" content="petpalsadoption - Your Ultimate Pet Adoption Service" />
         <meta property="og:description" content="Welcome to petpalsadoption! Discover your perfect furry friend. Join us in giving pets a loving home." />
         <meta property="og:image" content="https://yourwebsite.com/images/logo.jpg" /> 
         <meta property="og:url" content="https://petpalsadoption.com/" />
         <meta property="og:type" content="website" />
         <meta name="twitter:card" content="summary_large_image" />
         <meta name="twitter:title" content="petpalsadoption - Your Ultimate Pet Adoption Service" />
         <meta name="twitter:description" content="Welcome to petpalsadoption! Discover your perfect furry friend. Join us in giving pets a loving home." />
         <meta name="twitter:image" content="https://yourwebsite.com/images/logo.jpg" /> 
         <meta name="twitter:url" content="https://petpalsadoption.com/" />
        </Helmet>
        <div className="container mt-5 pt-5">
            <div className="container">
            <div className="d-flex flex-row justify-content-around mb-4">
                <h5 className={isSelected === 'all' ? "fw-bold selected" : "fw-bold text-secondary pointer"} onClick={() => { setisSelected("all") }} >All</h5>
                <h5 className={isSelected === 'Approved' ? "fw-bold selected" : "fw-bold text-secondary pointer"} onClick={() =>  { setisSelected("Approved") }}>Approved</h5>
                <h5 className={isSelected === 'pending' ? "fw-bold selected" : "fw-bold text-secondary pointer"} onClick={() => { setisSelected("pending") }}>Pending</h5>
            </div>
            {
              isloading ? (
                 <Spinnerlong />
              )  : user == null ?  (
                 <div className="alert alert-warning">
                  It appears that you are logged out trying logining in to view your Applications
                 </div>
              ) : (
                <div className="pb-xxl">
                {
                   isSelected === 'all' && (
                      <Allorders id={user.id}/>
                   )
                }
                {
                  isSelected === 'Approved' && (
                      <Suspense fallback={<Spinnerlong />}>
                          <Approvedorders id={user.id}/>
                      </Suspense>
                  )
                }
                {
                   isSelected === 'pending' && (
                      <Suspense fallback={<Spinnerlong />}>
                        <Pendingorders  id={user.id}/>
                      </Suspense>
                   )
                }
              </div>
              )
            }
            </div>
        </div>
        </>
    )
}
export default Orders;