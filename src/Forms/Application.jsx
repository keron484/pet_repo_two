import { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import axios from "../Api/axios";
import toast from 'react-hot-toast';
import { useParams } from "react-router-dom";
import { Spinnersingle } from "../Components/Spinner";
import useAuthContext from "../Context/authcontext";
import { useNavigate } from "react-router-dom";
function Application(){
  const { getUser, user, } = useAuthContext();
  useEffect(() => {
     if(user === null){
       getUser();
     }
  }, [])
    const {  handleSubmit, register } = useForm();
    const [ loading, setLoading ] = useState(null);
    const [ errors, setErrors ] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();
    const handle_submit = async (data) => {
        setLoading(true);
        try{
            await axios.post('api/apply', data);
            toast.success('Your Application was created succesfully');
            setLoading((prevalue) => prevalue = false);
            navigate('/confrimation');
        }
        catch(e){
            if (e.response) {
                const errorData = e.response.data;
                setErrors(errorData.errors);
                toast.error("Something went wrong ");
                setLoading((prevalue) => prevalue = false);
              }
        }
    }
    return (
      <>
        <div className="container mt-5 pt-5">
          <div className="form   mt-3 p-2   pb-5 justify-content-center d-flex flex-row">
            <form action="" className="w-75 card shadow-sm rounded-4 py-2" onSubmit={handleSubmit(handle_submit)}>
              <h3 className="text-center my-2 fw-bold">Application Form</h3>
              <div className="visually-hidden">
                <input type="text" name="pet_id" {...register("pet_id")} value={id}/>
                <input type="text" name="user_id" {...register("user_id")} value={user.id}/>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="step-one px-3">
                      <h6 className="fw-bold text-start">
                        Personal Information
                      </h6>
                      <div className="mb-2">
                        <p className="my-0">Full Name</p>
                        <input
                          type="text"
                          className={errors.fullname ? "form-control border-danger" : "form-control"}
                          placeholder="Enter your full Names"
                          name="fullname"
                          {...register("fullname")}
                        />
                      {
                        errors.fullname && (
                            <div className="text-danger">
                                {
                                    errors.fullname[0]
                                }
                            </div>
                        )
                      }
                      </div>
                      <div className="mb-2">
                        <p className="my-0">Email Address</p>
                        <input
                          type="email"
                          className={errors.email ? "form-control border-danger" : "form-control"}
                          placeholder="Enter Your Email Address"
                          name="email"
                          {...register('email')}
                        />
                      {
                        errors.email && (
                            <div className="text-danger">
                                {
                                    errors.email[0]
                                }
                            </div>
                        )
                      }
                      </div>
                      <div className="mb-2">
                        <p className="my-0">Phone Number</p>
                        <input
                          type="tel"
                          className={errors.phone_number ? "form-control border-danger" : "form-control"}
                          placeholder="Enter your Phone Number"
                          name="phone_number"
                          {...register('phone_number')}
                        />
                      {
                        errors.phone_number && (
                            <div className="text-danger">
                                {
                                    errors.phone_number[0]
                                }
                            </div>
                        )
                      }
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="step-two px-3">
                      <h6 className="fw-bold text-start">
                        Address Information
                      </h6>

                      <div className="mb-2">
                        <p className="my-0">Street Address</p>
                        <input
                          type="text"
                          className={errors.address ? "form-control border-danger" : "form-control"}
                          placeholder="Enter your Street Address"
                          name="address"
                          {...register('address')}
                        />
                      {
                        errors.address && (
                            <div className="text-danger">
                                {
                                    errors.address[0]
                                }
                            </div>
                        )
                      }
                      </div>
                      <div className="mb-2">
                        <p className="my-0">City</p>
                        <input
                          type="text"
                          className={errors.city ? "form-control border-danger" : "form-control"}
                          placeholder="Enter Your city"
                          name="city"
                          {...register('city')}
                        />
                        {
                            errors.city && (
                                <div className="text-danger">
                                    {
                                        errors.city[0]
                                    }
                                </div>
                            )
                        }
                      </div>
                      <div className="mb-2">
                        <p className="my-0">State</p>
                        <input
                          type="text"
                          className={errors.state ? "form-control border-danger" : "form-control"}
                          placeholder="Enter your state"
                          name="state"
                          {...register('state')}
                        />
                        {
                            errors.state && (
                                <div className="text-danger">
                                    {
                                        errors.state[0]
                                    }
                                </div>
                            )
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="step-three px-3">
                <h6 className="fw-bold text-start">Others</h6>
                <div className="mb-2">
                  <p className="my-0">Number of Kids</p>
                  <input
                    type="number"
                    className={errors.num_kids ? "form-control border-danger" : "form-control"}
                    placeholder="Enter Number of kids"
                    name="num_kids"
                    {...register('num_kids')}
                  />
                  {
                     errors.num_kids && (
                        <div className="text-danger">
                            {
                                errors.num_kids[0]
                            }
                        </div>
                     )
                  }
                </div>
                <div className="mb-2">
                  <p className="my-0">Number of Pets</p>
                  <input
                    type="number"
                    className={errors.num_pets ? "form-control border-danger" : "form-control"}
                    placeholder="Enter Number Of Pets"
                    name="num_pets"
                    {...register('num_pets')}
                  />
                  {
                    errors.num_pets && <div className="text-danger">
                       {
                         errors.num_pets[0]
                       }
                    </div>
                  }
                </div>
                <div className="mb-2">
                  <p className="my-0">Preferred Payment Method</p>
                  <input
                    type="text"
                    className={errors.payment_method ? "form-control border-danger" : "form-control"}
                    placeholder="Enter Number Preffered Payment Method"
                    name="payment_method"
                    {...register('payment_method')}
                  />
                  {
                    errors.payment_method && <div className="text-danger">
                        {
                            errors.payment_method[0]
                        }
                    </div>
                  }
                </div>
                <div className="mb-2">
                  <p className="my-0">Reason for adpotion</p>
                  <textarea
                    placeholder="Enter reason for adoption"
                    className={errors.reason ? "form-control border-danger" : "form-control"}
                    name="reason"
                    {...register('reason')}
                  ></textarea>
                  {
                    errors.reason && <div className="text-danger">
                        {
                            errors.reason[0]
                        }
                    </div>
                  }
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="invalidCheck"
                    required
                  />
                  <label className="form-check-label" htmlFor="invalidCheck">
                    Agree to terms and conditions
                  </label>
                  <div className="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>

                <button className="w-100 border-none rounded-3 text-white primary-bg py-2 my-2" type="submit">
                    {
                        loading ? <Spinnersingle /> : <>submit</>

                    }
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
}
export default Application;

