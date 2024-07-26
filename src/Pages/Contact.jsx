import axios from "../Api/axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Spinnersingle } from "../Components/Spinner";
function Contact(){
   const {register, handleSubmit } = useForm();
   const [ errors, setErrors ] = useState([]);
   const [ errormsg, setErrormsg ]  = useState(null);
   const [ loading, setLoading ] = useState(null);
   const [ successMessage, setSuccessMessage ] = useState(null);
   const handle_sendmessage = async(data) => {
    setLoading(true);
      try{
          await axios.post("api/send-message", data);
          setLoading((prevalue) => prevalue = false);
          setSuccessMessage("Message sent succesfully we will get back to you shortly");
      }
      catch(e){
        if(e.response){
            const errorData = e.response.data;
            setErrormsg("Opps an error occured while trying to send message");
            setErrors(errorData.errors);
            setLoading((prevalue) => prevalue = false);
        }
      }
   }
    return(
        <>
<div className="container pt-3">
    <div className="login-box">
        <h2 className="fw-bold text-center">Contact Us</h2>
        <div className="card w-100 p-2 rounded-4">
            <div className="row">
                <div className="col-lg-6">
                    <div className=" rounded-4 contact-img">

                    </div>
                </div>
                <div className="col-lg-6">
                <form action="" onSubmit={handleSubmit(handle_sendmessage)}>
                    {
                        errormsg && <div className="alert alert-danger py-1 fs-12">
                            {
                                errormsg
                            }
                        </div>

                    }
                    {
                         successMessage && <div className="alert alert-success fs-12 py-1">
                            {
                                successMessage
                            }
                         </div>
                    }
                <div className="my-2">
                        <h4 className="fw-bold text-center">Contact Form</h4>
                    </div>
                    <div className="my-3">
                        <p className="my-0">Username</p>
                        <input type="text" 
                        className={errors.username ? "form-control border-danger" : "form-control"} 
                        placeholder="Enter Your Username"
                        name="username"
                        {...register("username")}
                        />
                        {
                            errors.username && <div className="text-danger">
                                {
                                    errors.username[0]
                                }
                            </div>
                        }
                    </div>
                    <div className="my-3">
                        <p className="my-0">Email</p>
                        <input 
                        type="email" 
                        className={errors.email ? "form-control border-danger" : "form-control"} 
                        placeholder="Enter Your Email"
                        name="email"
                        {...register("email")}
                        />
                        {
                            errors.email && <div className="text-danger">
                                {
                                    errors.email[0]
                                }
                            </div>
                        }
                    </div>
                    <div className="my-3">
                        <p className="my-0">Message</p>
                        <textarea 
                        name="message" 
                        placeholder="Enter Message" 
                        className={errors.message ? "form-control border-danger" : "form-control"}
                        rows={10}
                        cols={10}
                        {...register("message")}
                        >
                        </textarea>
                        {
                            errors.message && <div className="text-danger">
                                {
                                    errors.message[0]
                                }
                            </div>
                        }
                    </div>
                    <div className="my-3">
                        <button className="border-none primary-bg text-white rounded-3 py-2 w-100">
                            {
                                loading ? <Spinnersingle/> : <>Send Message</>
                            }
                        </button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}
export default Contact;