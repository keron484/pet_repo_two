import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../Api/axios";
import { filter_array } from "../Utils/functions";
import { Spinnerlong } from "../Components/Spinner";
function Petdetails(){
  const [ loading, setLoading ] = useState(true);
  const [ pet, setPet ] = useState([]);
  const [ error, setError ] = useState(null);
  const { id } = useParams();
   useEffect(() => {
     const handle_fetch = async () => {
        try{
            const response = await axios.get('api/pets');
            setPet(filter_array(response.data.pets, id));
            setLoading((prevalue) => prevalue = false);
        }
        catch(e){
          if(e.response){
            setError("Something went wrong while fetching Pet details");
            setLoading((prevalue) => prevalue = false);
          }
        }
     }
     handle_fetch();
  }, [])
    return(
        <>
<div className="container pt-5">
    {
      loading ? ( 
        <Spinnerlong />
      ) : pet.length > 0 ? (
         <>
         {
             pet.map((items) => {
               return(
                <>
                <div className="mt-5">
    <div className="row">
        <div className="col-lg-6">
            <div className="w-100">
                <div className="d-flex flex-row gap-3 justify-content-end">
                    <button className="border-none fs-12 py-2 secondary-bg c-primary rounded-pill px-2">
                        {items.sex}
                    </button>
                    <button className="border-none fs-12 py-2 secondary-bg c-primary rounded-pill px-2">
                        Avialable
                    </button>
                    <button className="border-none fs-12 py-2 secondary-bg c-primary rounded-pill px-2">
                        Avialable
                    </button>
                </div>
                <div className="d-flex flex-row justify-content-start my-2">
                  <h4 className="fw-bold">{items.name}</h4>
                </div>
                <p className="fs-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Perspiciatis libero nemo temporibus neque ut at minima 
                     deserunt laboriosam.Molestiae doloremque totam, minus nisi 
                     cumque tempore explicabo eaque nihil? Amet, sequi.
               </p>
                <p className="my-0 fw-bold">Specific Detials</p>
               <div className="d-flex flex-row my-2 gap-2">
               <button className="border-none fw-bold fs-12 py-2 secondary-bg c-primary rounded-pill px-2">
                        Age: {items.age}
                    </button>
                    <button className="border-none fw-bold fs-12 py-2 secondary-bg c-primary rounded-pill px-2">
                        Weight: {items.weight}
                    </button>
                    <button className="border-none fw-bold fs-12 py-2 secondary-bg c-primary rounded-pill px-2">
                        Adoption History: 20ounces
                    </button>
               </div>
               <div className="d-flex flex-row my-2 gap-2">
               <button className="border-none fw-bold fs-12 py-2 secondary-bg c-primary rounded-pill px-2">
                        Age: 36weeks
                    </button>
                    <button className="border-none fw-bold fs-12 py-2 secondary-bg c-primary rounded-pill px-2">
                        Weight: 20ounces
                    </button>
                    <button className="border-none fw-bold fs-12 py-2 secondary-bg c-primary rounded-pill px-2">
                        Adoption History: 20ounces
                    </button>
               </div>
               <h6 className="fw-bold">Over 100 Applications</h6>
            </div>
        </div>
        <div className="col-lg-6">
             <div className="card">
                <img src={require(`../../../server/public/petimages/${items.pet_image}`)} alt="" className="w-100 details-img"/>
             </div>
         </div>
        <div className="w-100 px-2 d-flex flex-row align-items-center justify-content-between">
          <p className="my-0">Cost Of Adoption</p>
          <h1 className="fw-bold">{items.price}$</h1>
        </div>
        <div className="w-100 px-2 my-2">
          <Link className="link w-100" to={`/decription/${items.id}`}>
            <button className="py-0  fw-bold border-none primary-bg rounded-3 text-white w-100 py-2">Begin Adoption Process</button>
          </Link>
        </div>
    </div>
    </div>
                </>
               )
             })
         }
         </>
      ) : (
        <>
        <div className="alert alert-danger">
          {
            error
          }
        </div>
        </>
      )
    }
</div>
        </>
    )
}
export default Petdetails;