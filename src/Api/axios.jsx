import axios from "axios";

export default axios.create({
    baseURL:"https://server.petpalsadoption.com/",
    withCredentials:true,
    withXSRFToken:true
})
