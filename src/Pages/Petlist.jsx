import Petcomponent from "../Components/Petcomponent";
import Category from "../Components/Category";
import { Spinnerlong } from "../Components/Spinner";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import axios from "../Api/axios";
import '../Utils/functions';
import { Helmet } from "react-helmet";
function Petlist(){
    const [ pets, setPets ] = useState([]);
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    useEffect(() => {
       const handle_fetch = async () => {
           try{
               const response = await axios.get('api/getallpetscategories');
               setLoading((prevalue) => prevalue = false);
               setPets(response.data.pet_category);
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
        <Helmet>
        <meta charSet="utf-8" />
         <title>Petlist</title>
         <link rel="canonical" href="https://petpalsadoption.com/" />
         <meta property="og:title" content="petpalsadoption - Your Ultimate Pet Adoption Service" />
         <meta property="og:description" content="Welcome to petpalsadoption! Discover your perfect furry friend. Join us in giving pets a loving home." />
         <meta property="og:image" content="https://yourwebsite.com/images/logo.jpg" /> 
         <meta property="og:url" content="https://petpalsadoption.com/" />
         <meta property="og:type" content="website" />
         <meta name="twitter:card" content="summary_large_image" />
         <meta name="twitter:title" content="petpalsadoption - Your Ultimate Pet Adoption Service" />
         <meta name="twitter:description" content="Welcome to petpalsadoption! Discover your perfect furry friend. Join us in giving pets a loving home." />
         <meta name="twitter:image" content="https://yourwebsite.com/images/logo.jpg" /> 
         <meta name="twitter:url" content="https://petpalsadoption.com/" />
        </Helmet>
     <div className='container pt-5 mt-4'>
  <Category />
  <div>
    {loading ? (
      <Spinnerlong />
    ) : error ? (
      <div className='alert alert-warning'>{error}</div>
    ) : pets.length > 0 ? (
      <>
        {pets.map(items => {
          return (
            <div className='row'>
              <h4 className='fw-bold my-2 text-center' id={items.name}> <Icon icon="fluent-emoji-high-contrast:paw-prints" className="fs-1 mx-2" color="#ffc93c"/> {items.name} <Icon icon="fluent-emoji-high-contrast:paw-prints" color="#ffc93c" className="fs-1 mx-2"/> </h4>
              {items.pets.map(pet => {
                return (
                  <>
                    <Petcomponent
                      id={pet.id}
                      name={pet.name}
                      pet_image={pet.pet_image}
                      price={pet.price}
                    />
                  </>
                )
              })}
            </div>
          )
        })}
      </>
    ) : (
      <div className='alert alert-waring'>Something went wrong</div>
    )}
  </div>
      </div>

        </>
    )
}
export default Petlist;