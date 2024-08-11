import { Completed } from "../Components/Spinner";
import { useNavigate } from "react-router-dom";
function Confirmation(){
    const navigate = useNavigate();
    return(
        <>
         <div className="container pt-5 d-flex flex-row justify-content-center align-items-center">
            <div className="d-block">
            <div className="alert alert-success">
                Your application was succesfull and its currently under review
            </div>
             <Completed />
             <button className="w-100 border-none rounded-3 shadow-sm py-2 primary-bg" onClick={() => {
                navigate("/");
             }}>Take Me Home</button>
            </div>
         </div>
        </>
    )
}
export default Confirmation;