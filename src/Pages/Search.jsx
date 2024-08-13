import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import axios from 'axios';
import Petcomponent from "../Components/Petcomponent";
import Frequentlysearched from "../Components/Frequentlysearched";
import { Categorytwo } from "../Components/Category";
import { Helmet } from "react-helmet";
import debounce from 'lodash.debounce';
function Search(){
  const [searchTerm, setSearchTerm] = useState('');
  const [pets, setPets] = useState([]);
  const [error, setError] = useState(null);
  const [abortController, setAbortController] = useState(null);

  useEffect(() => {
      // Cleanup when the component unmounts or before a new request
      return () => {
          if (abortController) {
              abortController.abort();
          }
      };
  }, [abortController]);

  // The function that will be invoked after the user stops typing
  const fetchPets = async (term) => {
      if (!term) {
          setPets([]);
          setError(null);
          return; // If the search term is empty, clear pets and exit
      }

      // Abort any ongoing request
      if (abortController) {
          abortController.abort();
      }

      const controller = new AbortController(); // Create a new AbortController
      setAbortController(controller); // Save controller to state for cleanup

      try {
          const response = await axios.get(`http://localhost:8000/api/search-pet`, {
              params: { search: term },
              signal: controller.signal, // Pass the signal to the request
          });
          setPets(response.data.data); // Set the retrieved data to the state
          setError(null); // Clear any previous errors
      } catch (err) {
          if (axios.isCancel(err)) {
              console.log('Request canceled:', err.message);
          } else {
              setError('Error fetching search results');
              console.error(err);
          }
      }
  };

  // Debounce the fetchPets function
  const debouncedFetchPets = debounce(fetchPets, 300);

  const handleInputChange = (e) => {
      const value = e.target.value;
      setSearchTerm(value); // Update search term state
      debouncedFetchPets(value); // Trigger the debounced function
  };

   
    return(
        <>
        <Helmet>
        <meta charSet="utf-8" />
         <title>Search</title>
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
       <div className="container pt-5 mt-5">
      <div className="search-section mt-5">
       <div className="d-flex flex-row align-items-center justify-content-center w-100 mt-5">
            <div className="d-block w-75 ">
          <div className="input-group w-100 mb-3 input-group-lg mt-5">
            <span className="input-group-text primary-bg" id="inputGroup-sizing-default">
            <Icon icon="material-symbols:search" className="fs-3 text-white"/>
            </span>
           <input type="text" className="form-control"
            aria-label="Sizing example input" 
            aria-describedby="inputGroup-sizing-default" 
            placeholder="Search for any pet"
                 value={searchTerm}
                 onChange={ handleInputChange }
            />
              </div>
            {searchTerm && (
                    <div className="card border-none mt-3 rounded-4 px-2 py-2  text-white w-100 primary-bg">
                        {pets.map((items) => (
                            <div className="d-flex flex-row align-items-center justify-content-between px-2 ">
                                <p className="my-1 fs-12" onClick={() => setSearchTerm(items.name)}>{items.name} <span className="mx-2"> {Number(items.price).toFixed(0)}</span> <span> {items.breed} </span> </p>
                                <p className="my-1"><Icon icon="gravity-ui:chevron-right" className="fs-3"/></p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
    </div>
    </div>
   {
     searchTerm === '' ? (
       <>
       <Categorytwo />
       </>
     ) : (
       null
     )
   }

 {
    searchTerm === '' ? (
        <>
     <p className="text-start mt-5 fw-bold">
    Frequently searched
       </p>
    <div className="row">
      <Frequentlysearched />
    </div>
        </>
    ) : (
       null
    )
 }
  {
    searchTerm &&  <div className="row">
    {
      pets.map((pets) => {
             return(
               <>
                 <Petcomponent 
                  id={pets.id}
                  name={pets.name}
                  pet_image={pets.pet_image}
                  price={pets.price}
                />           
               </>
             )
      })
    }
    </div>
  }
</div>
        </>
    )
}
export default Search