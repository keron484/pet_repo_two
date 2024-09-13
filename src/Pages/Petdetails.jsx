import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../Api/axios";
import { filter_array } from "../Utils/functions";
import { Spinnerlong } from "../Components/Spinner";
import { Icon } from "@iconify/react";
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
<div className="container pt-5 pb-xl">
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
                      Over {items.number_of_appication} Applications
                     </button>
                    <button className="border-none fs-12 py-2 secondary-bg c-primary rounded-pill px-2">
                        {items.number_of_interested_persons} People also interested 
                    </button>
                    
                </div>
                <div className="d-flex flex-row justify-content-start my-2">
                  <h4 className="fw-bold">{items.name}</h4>
                </div>
                <p className="fs-6">
                  {items.description}
               </p>
                <p className="my-0 fw-bold">Specific Detials</p>
               <div className="d-flex flex-row my-2 gap-2">
               <button className="border-none fw-medium fs-12 py-2 secondary-bg c-primary rounded-pill px-2">
                        Age: {items.age}
                    </button>
                    <button className="border-none fw-medium fs-12 py-2 secondary-bg c-primary rounded-pill px-2">
                        Weight: {items.weight} lbs
                    </button>
                    <button className="border-none fw-medium fs-12 py-2 secondary-bg c-primary rounded-pill px-2">
                        Sex: {items.sex}
                    </button>
               </div>
               <div className="d-flex flex-row my-2 gap-2">
                    <button className="border-none fw-medium fs-12 py-2 secondary-bg c-primary rounded-pill px-3">
                    <div className="d-block">
                      <p className="my-0 text-start">
                      Kid-Friendly :
                      </p>
                      <p>
                      Gentle with children and supervision is not recommended
                      </p>
                      </div> 
                    </button>
               </div>
               <div className="d-flex flex-row my-2 gap-2">
                    <button className="border-none fw-medium fs-12 py-2 secondary-bg c-primary rounded-pill px-3">
                    <div className="d-block">
                      <p className="my-0 text-start">
                      Trainable :
                      </p>
                      <p>
                      House-trained and knows basic commands.
                      </p>
                      </div> 
                    </button>
               </div>
               <div className="d-flex flex-row my-2 gap-2">
               <button className="border-none fw-medium fs-12 py-2 secondary-bg c-primary rounded-pill px-3">
                    <div className="d-block">
                      <p className="my-0 text-start">
                      Fun-Loving:
                      </p>
                      <p>
                      treats, belly rubs, and swimming, bringing joy to any outing
                      </p>
                      </div> 
                    </button>
               </div>
               
            </div>
            <div className="my-2">
              <a href="https://wa.me/13343574064" 
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              >
              <button className="c-primary text-dark border-none w-75 primary-bg rounded-2 py-2">
               <div className="d-flex flex-row align-items-center gap-2 justify-content-around">
               <p className="my-0">
                Request more info about {items.name}
                </p>
                <p className="my-0">
                <Icon icon="ion:social-whatsapp" className="fs-3" />
                </p>
               </div>
              </button>
              </a>
            </div>
        </div>
        <div className="col-lg-6">
             <div className="card border-none">
                <img src={`https://server.petpalsadoption.com/public/petimages/${items.pet_image}`} alt="" className="w-100 details-img"/>
             </div>
         </div>
        <div className="w-100 px-2 d-flex flex-row align-items-center justify-content-between">
          <p className="my-0">Cost Of Adoption</p>
          <h1 className="fw-bold">{Number(items.price).toFixed(0)}$</h1>
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