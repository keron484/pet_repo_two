import { Link, useNavigate } from "react-router-dom";
import useAuthContext from "../Context/authcontext";
import { useForm } from "react-hook-form";
import { Spinnersingle } from "../Components/Spinner";
function Register(){
    const { signup, loading,  error, msgerror } = useAuthContext();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const handle_register = async (data) => {
         signup(data, navigate);
    }
    return(
        <>
                 <div className="container">
            <div className="login-box my-5">
                <div className="card form-container px-3 pt-3 rounded-4">
                    {
                        msgerror.signup && <div className="alert alert-danger  fs-12">
                            {
                                msgerror.signup
                            }
                        </div>
                    }
                    <form action="" onSubmit={handleSubmit(handle_register)}>
                    <div className="d-flex flex-row align-items-center justify-content-between mt-4 mb-2">
                        <p className="my-0"></p>
                        <h4 className="fw-bold">Create Account</h4>
                        <p className="my-0">$$</p>
                    </div>
                    <div className="my-4">
                        <p className="my-0">Username</p>
                        <input 
                        type="text" 
                        className={ error.signup.name ? "form-control border-danger" : "form-control"  }
                        placeholder="Enter Your Username"
                        name="name"
                        {...register("name")}
                        />
                        {
                            error.signup.name && <div className="text-danger">
                                {
                                    error.signup.name[0]
                                }
                            </div>
                        }
                    </div>
                    <div className="my-4">
                        <p className="my-0">Email</p>
                        <input 
                        type="email" 
                        placeholder="Enter Your Email" 
                        className={error.signup.email ? "form-control border-danger" : "form-control"}
                        name="email"
                        {...register("email")}
                        />
                    {
                        error.signup.email && <div className="text-danger">
                            {
                                error.signup.email[0]
                            }
                        </div>
                    }
                    </div>
                    <div className="my-4">
                        <p className="my-0">Password</p>
                        <input 
                        type="password" 
                        placeholder="Enter Password" 
                        className={error.signup.password ? "border-danger form-control" : "form-control"}
                        name="password"
                        {...register("password")}
                        />
                    {
                        error.signup.password && <div className="text-danger">
                            {
                                error.signup.password[0]
                            }
                        </div>
                    }
                    </div>
                    <div className="my-4">
                        <p className="my-0">Password Confrimation</p>
                        <input 
                        type="password" 
                        placeholder="Enter confirm password" 
                        className={error.signup.password ? "border-danger form-control" : "form-control"}
                        name="password_confirmation"
                        {...register("password_confirmation")}
                        />
                    {
                        error.signup.password && <div className="text-danger">
                            {
                                error.signup.password[0]
                            }
                        </div>
                    }
                    </div>
                    <div className="mt-4 w-100 mb-2">
                    <button className={loading.signup ? "text-white py-2 border-none rounded-3 primary-bg w-100 fw-bold" : "text-white py-2 border-none rounded-3 primary-bg w-100 fw-bold"}>
                        {
                            loading.signup ? <Spinnersingle /> : <>Create Account</>
                        }
                    </button>
                    </div>
                    <div className="my-3">
                        <div className="d-flex flex-row gap-2 justify-content-between">
                            <hr className=" w-25"/>
                            <p className="my-0 fs-12">Or</p>
                            <hr className="w-25"/>
                        </div>
                        <div className="d-flex flex-row justify-content-end">
                        <div className="d-block mt-3">
                        <div className="text-end">
                        <Link className="link fs-13" to="/login">Already Have An account ? Login</Link>
                        </div>
                        <div>
                        <Link className="link fs-13" to="/account-recovery">Forgotten Password?  Recover Password</Link>
                        </div>
                        </div>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
         </div>
        </>
    )
}
export default Register