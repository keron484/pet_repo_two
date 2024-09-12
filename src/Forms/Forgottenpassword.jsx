import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import axios from "../Api/axios";
import { Toaster } from "react-hot-toast";
import { Spinnersingle } from "../Components/Spinner";
function Forgottenpassword() {
    const [error, setErrors] = useState({});
    const { register, reset, handleSubmit } = useForm();
    const [loading, setLoading] = useState(null);
    const csrf = () => axios.get('/sanctum/csrf-cookie');
    const navigate = useNavigate();

    const handle_account_recovery = async (data) => {
        await csrf();
        setLoading(true);
        try {
             await axios.post('api/password-reset-otp', data);
             setLoading(false);
            toast.success("Verification code sent successfully!");
            navigate('/verify-otp')
            reset();
        } catch (e) {
            setLoading(false)
            if (e.response) {
                const errorData = e.response.data;
                setErrors(errorData.errors || {}); // Make sure to handle form errors
                toast.error(errorData.message || "An error occurred");
            }
            reset();
            
        }
    }

    return (    
        <>
        <div><Toaster /></div>
        <div className="container">
            <div className="d-flex flex-column">
                <div className="login-box">
                    <div className="d-flex mb-4 flex-row align-items-center justify-content-center">
                        <img src="/logo/logo.png" alt="" className="object-fit-contain w-50" />
                    </div>
                    <div className="card form-container px-3 rounded-4">
                        <form onSubmit={handleSubmit(handle_account_recovery)}>
                            <div className="d-flex flex-row align-items-center justify-content-between my-2">
                                <p className="my-0"></p>
                                <h4 className="fw-bold">Account Recovery</h4>
                                <p className="my-0" onClick={() => navigate("/")}>
                                    <Icon icon="fluent-mdl2:cancel" className="fs-3" />
                                </p>
                            </div>
                            <div className="my-4">
                                <p className="my-0">Email</p>
                                <input 
                                    type="email" 
                                    placeholder="Enter Your Email" 
                                    className={error.email ? "form-control border-danger" : "form-control"}
                                    {...register("email")} // Example validation
                                />
                            </div>
                            {error.email && (
                                <div className="text-danger">{error.email[0]}</div>
                            )}
                            <div className="mt-4 w-100 mb-2">
                                <button 
                                    className="text-white border-none rounded-2 py-2 primary-bg w-100 fw-bold"
                                    type="submit"
                                >
                                <div className="d-flex flex-row justify-content-center">
                                    {
                                        loading ? <Spinnersingle /> : <> Send Verification code</>
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
    );
}

export default Forgottenpassword;