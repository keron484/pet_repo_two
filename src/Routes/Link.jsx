import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Petdetails from "../Pages/Petdetails";
import Search from "../Pages/Search";
import Petlist from "../Pages/Petlist";
import Login from "../Forms/Login";
import Register from "../Forms/Register";
import Forgottenpassword from "../Forms/Forgottenpassword";
import Layout from "../Layout/Layout";
function Link(){
    return(
         <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/create-account" element={<Register />}></Route>
                <Route path="/account-recovery" element={<Forgottenpassword />}></Route>
                <Route element={<Layout />}>
                <Route path="/" element={<Home />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/pet-details/:id" element={<Petdetails />}></Route>
                <Route path="/search" element={<Search />}></Route>
                <Route path="/pet-list" element={<Petlist />}></Route>
                </Route>
            </Routes>
         </BrowserRouter>
    )
}
export default Link;