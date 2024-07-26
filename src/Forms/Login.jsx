import { Link, useNavigate } from "react-router-dom";
import useAuthContext from "../Context/authcontext";
import { useForm } from "react-hook-form";
import { Spinnersingle } from "../Components/Spinner";
function Login(){
    const { login, error, msgerror, loading } = useAuthContext();
    const { handleSubmit, register } = useForm();
    const navigate = useNavigate();
    const handle_login = async (data) => {
         login(data, navigate)
    }
    return(
        <>
         <div className="container">
            <div className="login-box">
                <div className="card form-container px-3 pt-3 rounded-4">
                    {
                        msgerror.login && <div className="alert alert-danger mt-2 fs-12">
                            {
                                msgerror.login
                            }
                        </div>
                    }
                    <form action="" onSubmit={handleSubmit(handle_login)}>
                    <div className="d-flex flex-row align-items-center justify-content-between my-2">
                        <p className="my-0"></p>
                        <h4 className="fw-bold">Login</h4>
                        <p className="my-0">$$</p>
                    </div>
                    <div className="my-4">
                        <p className="my-0">Email</p>
                        <input 
                        type="email" 
                        placeholder="Enter Your Email" 
                        className={ error.login.email ? "form-control border-danger" : "form-control" }
                        name="email"
                        {
                            ...register("email")
                        }
                        />
                        {
                            error.login.email && <div className="text-danger">
                                {
                                    error.login.email[0]
                                }
                            </div>
                        }
                    </div>
                    <div className="my-4">
                        <p className="my-0">Password</p>
                        <input 
                        type="password" 
                        placeholder="Enter Password" 
                        className={error.login.password ? "form-control border-danger" : "form-control"}
                        name="password"
                        {...register("password")}
                        />
                        {
                            error.login.password && <div className="text-danger">
                                {
                                    error.login.password[0]
                                }
                            </div>
                        }
                    </div>
                    <div className="mt-4 w-100 mb-2">
                    <button className={ loading.login ? "text-white border-none primary-bg w-100 fw-bold disabled py-2 rounded-3" : "border-none rounded-3 text-white py-2 primary-bg w-100 fw-bold" }>
                        {
                            loading.login ? <Spinnersingle /> : <> Login </>
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
                        <Link className="link fs-12" to="/create-account">Don't Have An account ? create account</Link>
                        </div>
                        <div>
                        <Link className="link fs-12" to="/account-recovery">Forgotten Password?  Recover Password</Link>
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
export default Login;