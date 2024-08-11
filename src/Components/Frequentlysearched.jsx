import { useState } from "react";
import { useEffect } from "react";
import axios from "../Api/axios";
import { reduce_array_size } from "../Utils/functions";
import Petcomponent from "./Petcomponent";
import { Spinnerlong } from "./Spinner";
function Frequentlysearched(){
   const [ pets,  setPets ] = useState([]);
   const [ loading, setLoading ] = useState(true);
   const [ error, setError ] = useState(null);
   useEffect(() => {
     const handle_fetch = async() => {
         try{
             const response = await axios.get("api/pets");
             setLoading(false);
             setPets(reduce_array_size(response.data.pets, 0, 6))
         }
         catch(e){
            setError("Something went wrong check internet connection");
         }
     }
     handle_fetch();
   }, []);
    return(
        <>
           {loading ? (
              <Spinnerlong />
            ) : pets.length > 0 ? (
              <>
                {reduce_array_size(pets, 0, 6).map((pet) => {
                  return (
                    <Petcomponent
                      id={pet.id}
                      name={pet.name}
                      pet_image={pet.pet_image}
                      price={pet.price}
                    />
                  );
                })}
              </>
            ) : (
              <div className="alert alert-warning">{error}</div>
            )}
        </>
    )
}
export default Frequentlysearched;