import { useState } from "react";
import { useForm } from "react-hook-form";
import { Icon } from "@iconify/react";
import axios from "../Api/axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { Spinnersingle } from "../Components/Spinner";
function Passwordreset(){
    const [error, setErrors] = useState([]);
    const { register, reset, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(null);
    const handle_password_change = async (data) => {
        setLoading(true)
        try{
          await axios.post('api/reset-password', data);
          setLoading(false);
           toast.success("password changed succefully");
           navigate('/login');
        }
        catch(e){
            setLoading(false);
            if (e.response) {
                const errorData = e.response.data;
                setErrors(errorData.errors);
                toast.error(errorData.message);
            }
            reset();
        }
    }
    return(
        <>
        <div> <Toaster /> </div>
                 <div className="container">
            <div className="d-flex flex-column">
            <div className="login-box">
            <div className="d-flex mb-4 flex-row align-items-center justify-content-center">
                    <img src="/logo/logo.png" alt="" className="object-fit-contain w-50" />
                </div>
                <div className="card form-container px-3  rounded-4">
                    <form onSubmit={handleSubmit(handle_password_change)}>
                    <div className="d-flex flex-row align-items-center justify-content-between my-2">
                        <p className="my-0"></p>
                        <h4 className="fw-bold">Change Password</h4>
                        <p className="my-0" onClick={ () => {
                             navigate("/");
                        } }>
                            <Icon icon="fluent-mdl2:cancel" className="fs-3"/>
                        </p>
                    </div>
                    <div className="my-4">
                        <p className="my-0">New Password</p>
                        <input 
                         type="password"
                         placeholder="Enter new password" 
                         className="form-control"
                         name="password"
                         {...register("password")}
                         />
                    </div>
                    {error.password && (
                  <div className="text-danger">{error.password[0]}</div>
                       )}
                    <div className="mt-4 w-100 mb-2">
                    <button 
                    className="text-white border-none rounded-2 py-2 primary-bg w-100 fw-bold"
                    type="submit"
                    >
                        <div className="d-flex flex-row justify-content-center">
                            {
                                loading ? <Spinnersingle /> : <>Change password</>
                            }
                        </div>
                    </button>
                    </div>
                    </form>
                </div>
            </div>
            </div>
         </div>
        </>
    )
}

export default Passwordreset;