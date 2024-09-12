import { useState } from "react";
import axios from "../Api/axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Icon } from "@iconify/react";
import { Toaster } from "react-hot-toast";
import { Spinnersingle } from "../Components/Spinner";
function Verifyotp() {
    const { register, reset, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [error, setErrors] = useState({}); // Changed to object
    const [loading, setLoading] = useState(null);
    const handle_otp = async (data) => {
        setLoading(true);
        try {
            await axios.post('api/verify-otp', data); 
            setLoading(false);
            toast.success("OTP verified successfully");
            navigate('/password-reset');
        } catch (e) {
            setLoading(false);
            if (e.response) {
                const errorData = e.response.data;
                setErrors(errorData.errors || {}); // Handle form errors
                toast.error(errorData.message || "An error occurred");
            }
            reset(); // Reset the form only if there's an error
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
                            <form onSubmit={handleSubmit(handle_otp)}>
                                <div className="d-flex flex-row align-items-center justify-content-between my-2">
                                    <p className="my-0"></p>
                                    <h4 className="fw-bold">Verify OTP</h4>
                                    <p className="my-0" onClick={() => navigate("/")}>
                                        <Icon icon="fluent-mdl2:cancel" className="fs-3" />
                                    </p>
                                </div>
                                <div className="my-4">
                                    <p className="my-0">OTP</p>
                                    <input
                                        type="text"
                                        placeholder="Enter OTP"
                                        className={error.otp ? "form-control border-danger" : "form-control"}
                                        {...register("otp")} // Added validation requirement
                                    />
                                </div>
                                {error.otp && (
                                    <div className="text-danger">{error.otp[0]}</div>
                                )}
                                <div className="mt-4 w-100 mb-2">
                                    <button
                                        className="text-white border-none rounded-2 py-2 primary-bg w-100 fw-bold"
                                        type="submit"
                                    >
                                        <div className="d-flex flex-row justify-content-center">
                                        {
                                            loading ? <Spinnersingle /> : <> Verify Code</>
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

export default Verifyotp;