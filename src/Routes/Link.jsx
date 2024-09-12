import { Route, BrowserRouter, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Layout from "../Layout/Layout";
import { Comfort, Spinnerlong } from "../Components/Spinner";
const Home = React.lazy(() => import('../Pages/Home'));
const Petdetails = React.lazy(() => import('../Pages/Petdetails'));
const Search = React.lazy(() => import('../Pages/Search'));
const Petlist = React.lazy(() => import('../Pages/Petlist'))
const Login = React.lazy(() => import('../Forms/Login'));
const Register = React.lazy(() => import('../Forms/Register'));
const Forgottenpassword = React.lazy(() => import('../Forms/Forgottenpassword'));
const Contact = React.lazy(() => import('../Pages/Contact'));
const Application = React.lazy(() => import('../Forms/Application'));
const Profile = React.lazy(() => import('../Pages/Profile'));
const Favourites = React.lazy(() => import('../Pages/Favourites'));
const Description = React.lazy(() => import('../Pages/Description'));
const Confirmation = React.lazy(() => import('../Pages/Confirmation'));
const Orders = React.lazy(() => import('../Pages/Orders'));
const Passwordreset = React.lazy(()  => import('../Forms/password-reset'));
const Verifyotp = React.lazy(() => import('../Forms/verify-otp'));
function Link(){
    return(
         <BrowserRouter>
            <Routes>
                 <Route path="/login" element={
                 <Suspense fallback={<Spinnerlong />}>
                    <Login />
                    </Suspense> 
                    }>    
                </Route>
                <Route path="/password-reset" element={
                  <Suspense fallback={<Spinnerlong />}>
                     <Passwordreset />
                  </Suspense>
                }>
                </Route>
                <Route path="/verify-otp" element={
                  <Suspense fallback={<Spinnerlong />}>
                    <Verifyotp />
                  </Suspense>
                }>
                </Route>
                <Route path="/confrimation" element={
                 <Suspense fallback={<Spinnerlong />}>
                    <Confirmation />
                    </Suspense> 
                    }>    
                </Route>
                <Route path="/create-account" element={
                    <Suspense fallback={<Spinnerlong />}>
                        <Register />
                    </Suspense>
                }></Route>
                <Route path="/account-recovery" element={
                    <Suspense fallback={<Spinnerlong />}>
                        <Forgottenpassword />
                    </Suspense>
                }></Route>
                <Route element={<Layout />}>
                <Route path="/profile" element={
                    <Suspense>
                        <Profile />
                    </Suspense>
                }>
                </Route>
                <Route path="/" element={
                    <Suspense fallback={<Comfort />}>
                        <Home />
                    </Suspense>
                }></Route>
                <Route path="/orders" element={
                    <Suspense fallback={<Spinnerlong />}>
                        <Orders />
                    </Suspense>
                }></Route>
                <Route path="/contact" element={
                <Suspense fallback={<Spinnerlong />}>
                    <Contact />
                    </Suspense>
                }></Route>
                <Route path="/pet-details/:id" element={
                    <Suspense fallback={<Spinnerlong />}>
                        <Petdetails />
                    </Suspense>
                }></Route>
                <Route path="/search" element={
                    <Suspense fallback={<Spinnerlong />}>
                        <Search />
                    </Suspense>
                }></Route>
                <Route path="/pet-list" element={
                    <Suspense fallback={<Spinnerlong />}>
                     <Petlist />
                    </Suspense>
                }></Route>
                <Route path="/favourites" element={
                    <Suspense fallback={<Spinnerlong />}>
                     <Favourites />
                    </Suspense>
                }></Route>
                <Route path="/decription/:id" element={
                    <Suspense fallback={<Spinnerlong />}>
                     <Description />
                    </Suspense>
                }></Route>
                <Route path="/application/:id" element={
                    <Suspense fallback={<Spinnerlong />}>
                    <Application />
                   </Suspense>
                }>                
                </Route>
                </Route>
            </Routes>
         </BrowserRouter>
    )
}
export default Link;