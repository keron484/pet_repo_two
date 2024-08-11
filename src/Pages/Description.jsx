import { Animation } from "../Components/Spinner";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../Api/axios";
import { filter_array } from "../Utils/functions";
import { Helmet } from "react-helmet";
function Description(){
    const { id } = useParams();
    const [ data, setData ] = useState([]);
    const [ error, setError ] = useState(null);
    useEffect(() => {
         const handle_fetch = async () => {
             try{
                 const response = await axios.get('api/pets-categories');
                 setData(filter_array(response.data.pets_category, id));
             }
             catch(e){
                 setError("Something went wrong");
             }
         }
         handle_fetch();
    }, []);
    return(
        <>
         <Helmet>
        <meta charSet="utf-8" />
         <title>Description</title>
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
        <div className="container mt-5 pt-5">
            <div className="card rounded-4 shadow">
                <div className="container">
                    <div className="p-2">
                    <div className="row">
                        <div className="col-lg-6">
                           <Animation />
                        </div>
                        <div className="col-lg-6">
                        <div className="px-2">
                            <p className="text-center fs-4 fw-bold">Applying For</p>
                            {
                                data.length > 0 ? (
                                           <>
                                           {
                                            data.map((items) => {
                                                 return(
                                                      <>
                                                      <div className="d-flex flex-row align-items-center gap-2 my-4">
                                <div className="badge d-flex flex-row align-items-center justify-content-center">
                                <Icon icon="icon-park-solid:edit-name" className="fs-4" />
                                </div>
                                <div className="d-block">
                                    <p className="my-0">Pet Name</p>
                                    <p className="my-0 fs-6 fw-bold">{items.name}</p>
                                </div>
                            </div>
                            <div className="d-flex flex-row align-items-center gap-2 my-4">
                                <div className="badge d-flex flex-row align-items-center justify-content-center">
                                <Icon icon="ph:gender-intersex-bold" className="fs-4"/>
                                </div>
                                <div className="d-block">
                                    <p className="my-0">Sex</p>
                                    <p className="my-0 fs-6 fw-bold">{items.sex}</p>
                                </div>
                            </div>
                            <div className="d-flex flex-row align-items-center gap-2 my-4">
                                <div className="badge d-flex flex-row align-items-center justify-content-center">
                                <Icon icon="ph:gender-intersex-bold" className="fs-4"/>
                                </div>
                                <div className="d-block">
                                    <p className="my-0">Species</p>
                                    <p className="my-0 fs-6 fw-bold">{items.species}</p>
                                </div>
                            </div>
                            <div className="d-flex flex-row align-items-center gap-2 my-4">
                                <div className="badge d-flex flex-row align-items-center justify-content-center">
                                <Icon icon="ion:pricetags" className="fs-4"/>
                                </div>
                                <div className="d-block">
                                    <p className="my-0">Adoption Price</p>
                                    <p className="my-0 fs-6 fw-bold">{Number(items.price).toFixed(0)} $</p>
                                </div>
                            </div>
                            <div className="d-flex flex-row align-items-center gap-2 my-4">
                                <div className="badge d-flex flex-row align-items-center justify-content-center">
                                <Icon icon="material-symbols:category"className="fs-4" />
                                </div>
                                <div className="d-block">
                                    <p className="my-0">Category</p>
                                    <p className="my-0 fs-6 fw-bold">{items.category.name}</p>
                                </div>
                            </div>
                            <div className="d-flex flex-row align-items-center gap-2 my-4">
                                <div className="badge d-flex flex-row align-items-center justify-content-center">
                                <Icon icon="uis:calender" className="fs-4"/>
                                </div>
                                <div className="d-block">
                                    <p className="my-0">Age</p>
                                    <p className="my-0 fs-6 fw-bold">{items.age}</p>
                                </div>
                            </div>
                                                      </>
                                                 )
                                            })
                                           }
                                           </>
                                ) : (
                                     <div className="alert alert-danger">
                                        {
                                            error
                                        }
                                     </div>
                                )
                            }
                        </div>
                        <div className="d-flex flex-row gap-2">
                        <Link className="link w-50" to="/">
                        <button className=" btn-outline-dark btn w-100">
                          back
                        </button>
                        </Link>
                        <Link className="link w-50" to={`/application/${id}`}>
                        <button className=" text-white border-none  w-100 rounded-3 primary-bg py-2">
                          Next
                        </button>
                        </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Description;