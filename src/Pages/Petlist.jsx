import Petcomponent from "../Components/Petcomponent";
import Category from "../Components/Category";
import { Spinnerlong } from "../Components/Spinner";
import { useEffect, useState } from "react";
import axios from "../Api/axios";
function Petlist(){
    const [ pets, setPets ] = useState([]);
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    useEffect(() => {
       const handle_fetch = async () => {
           try{
              // const response = await axios.get('api/getallpetscategories');
               //setLoading((prevalue) => prevalue = false);
               //setPets(response.data.pets);
           }
           catch(e){
            if(e.response){
                setError("Opps something went wrong");
                setLoading((prevalue) => prevalue = false);
            }
           }
       }
       handle_fetch();
    }, [])
    return(
        <>
        <div className="container pt-5 mt-4">
            <Category />
        <div>
                {
                    loading ? ( 
                        <Spinnerlong />
                   ) : error ? (
                       <div className="alert alert-warning">
                        {
                            error
                        }
                     </div>
                   ) : (
                       <>
                      {
                       pets.map((items) => {
                          return(
                             <div className="row">
                                 <h4 className="fw-bold my-2 text-center">{items.name}</h4>
                                 {
                                    pets.pets.map((pet) => {
                                        return(
                                            <>
                                            <Petcomponent 
                                             name={pet.name}
                                             pet_image={pet.pet_image}
                                             price={pet.price}
                                            />
                                            </>
                                        )
                                    })
                                 }
                             </div>
                          )
                       })
                      }
                     </>
                   )
                }
        </div>
        </div>
        </>
    )
}
export default Petlist;