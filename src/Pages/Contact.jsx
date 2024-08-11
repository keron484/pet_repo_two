import axios from "../Api/axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Spinnersingle } from "../Components/Spinner";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
function Contact(){
   const {register, handleSubmit } = useForm();
   const [ errors, setErrors ] = useState([]);
   const [ loading, setLoading ] = useState(null);
   const handle_sendmessage = async(data) => {
    setLoading(true);
      try{
          await axios.post("api/send-message", data);
          setLoading((prevalue) => prevalue = false);
          toast.success("Message sent succesfully");
      }
      catch(e){
        if(e.response){
            const errorData = e.response.data;
            setErrors(errorData.errors);
            setLoading((prevalue) => prevalue = false);
            toast.error("Opps something went wrong trying to send message");
        }
      }
   }
    return(
        <>
        <Helmet>
        <meta charSet="utf-8" />
         <title>Home</title>
         <link rel="canonical" href="https://pethaven.com/" />
         <meta property="og:title" content="PetHaven - Your Ultimate Pet Adoption Service" />
         <meta property="og:description" content="Welcome to PetHaven! Discover your perfect furry friend. Join us in giving pets a loving home." />
         <meta property="og:image" content="https://yourwebsite.com/images/logo.jpg" /> 
         <meta property="og:url" content="https://pethaven.com/" />
         <meta property="og:type" content="website" />
         <meta name="twitter:card" content="summary_large_image" />
         <meta name="twitter:title" content="PetHaven - Your Ultimate Pet Adoption Service" />
         <meta name="twitter:description" content="Welcome to PetHaven! Discover your perfect furry friend. Join us in giving pets a loving home." />
         <meta name="twitter:image" content="https://yourwebsite.com/images/logo.jpg" /> 
         <meta name="twitter:url" content="https://pethaven.com/" />
        </Helmet>
<div className="container pt-3">
    <div className="login-box">
        <h2 className="fw-bold text-center">Contact Us</h2>
        <div className="card w-100 p-2 rounded-4 shadow">
            <div className="row">
                <div className="col-lg-6">
                    <div className=" rounded-4 contact-img">
                        <img src="/image/contact.png" alt="" className="object-fit-cover w-100" />
                    </div>
                </div>
                <div className="col-lg-6">
                <form action="" onSubmit={handleSubmit(handle_sendmessage)}>
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