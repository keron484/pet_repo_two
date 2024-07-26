import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import axios from "../Api/axios";
import { Spinnerlong } from "../Components/Spinner";
import { reduce_array_size } from "../Utils/functions";
import Petcomponent from "../Components/Petcomponent";
function Search(){
   const [ loading, setLoading ] = useState(true);
   const [ categories, setCategories ] = useState([]);
   const [ error, setError ] = useState(null);
   const [searchQuery, setSearchQuery] = useState('');
   const [products, setProducts] = useState([]);
   const [filteredProducts, setFilteredProducts] = useState([]);

   useEffect(() => {
       axios.get('api/search-pet') 
         .then(response => {
           setProducts(response.data);
         })
         .catch(error => {
           console.error(error);
         });
   }, []);

   const handleSearch = (value) => {
       setSearchQuery(value);
       filterProducts(value);
   };

   const filterProducts = (query) => {
       if (query) {
           const filteredProducts = products.filter((product) => {
               return product.name.toLowerCase().includes(query.toLowerCase());
           });
           setFilteredProducts(filteredProducts);
       } else {
           setFilteredProducts([]);
       }
   };
   useEffect(() => {
       const handle_fetch = async() => {
          try{
            const response = await axios.get('api/get-petcategory');
            setCategories(response.data.petcategories);
            setLoading((prevalue) => prevalue = false);
          }
          catch(e){
            if(e.response){
               setError("Something went wrong check internet connection");
               setLoading((prevalue) => prevalue = true);
            }
          }
       }
       handle_fetch();
   }, [])
   
    return(
        <>
<div className="container pt-5">
    <div className="search-section">
    <div className="d-flex flex-row align-items-center justify-content-center w-100">
            <div className="d-block w-75 ">
          <div className="input-group w-100 mb-3 input-group-lg mt-5">
            <span className="input-group-text primary-bg" id="inputGroup-sizing-default">
            <Icon icon="material-symbols:search" className="fs-3 text-white"/>
            </span>
           <input type="text" className="form-control"
            aria-label="Sizing example input" 
            aria-describedby="inputGroup-sizing-default" 
            placeholder="Search for any pet"
                 value={searchQuery}
                 onChange={e => handleSearch(e.target.value)}
            />
              </div>
            {searchQuery && (
                    <div className="card border-none mt-1 rounded-4 px-2 py-2  text-white w-100 primary-bg">
                        {filteredProducts.map((items) => (
                            <div className="d-flex flex-row align-items-center justify-content-between px-2 ">
                                <p className="my-1 fs-12" onClick={() => handleSearch(items.name)}>{items.name}</p>
                                <p className="my-1"><Icon icon="gravity-ui:chevron-right" className="fs-3"/></p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
    </div>
    </div>
   {
     searchQuery === '' ? (
       <>
        <div className="row mt-5">
      <p className="fs-12">Suggested For You</p>
      <div className="container">
       {
          loading ? (
            <Spinnerlong />
          ) : categories.length > 0 ? (
             <>
             {
              reduce_array_size(categories, 0, 11).map((items) => {
                 return(
                  <>
                   <button className="btn primary-bg col-lg-1 mx-1 col-xsm-2 fs-13  text-white rounded-5 my-2">
                      {
                        items.name
                      }
                   </button> 
                  </>
                 )
              })
             }
             </>
          ) : error ? (
               <div className="alert alert-warning">
                {
                  error
                }
               </div>
          ) : (
             <div className="alert alert-danger">
              Could'nt find any Pet Categor
             </div>
          )
       }
      </div> 
    </div>
       </>
     ) : (
       null
     )
   }

 {
    searchQuery === '' ? (
        <>
         <p className="text-start mt-5 fw-bold">
    Frequently searched
 </p>
 <div className="row">
    <div className="col-lg-3 my-2">
        <div className="card rounded-3 p-1 border-none shadow-sm ">
            <div>
                <img src="image/petimage.jpg" alt="" className="w-100 rounded-top-3 pet-image"/>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-between my-2">
                <h6 className="fw-bold">Pet Name</h6>
                <button className="secondary-bg btn c-primary fs-10 rounded-pill px-3 py-1">Avialable</button>
            </div>
            <div className="d-flex flex-row justify-content-end my-2">
                <div className="d-block text-center">
                    <p className="my-0 fs-10 fw-bold">Cost of Adoption</p>
                    <h4 className="fw-bold">3500 $</h4>
                </div>
            </div>
            <button className="btn primary-bg text-white fw-bold fs-13">
                Begin Adoption Process
            </button>
        </div>
    </div>
    <div className="col-lg-3 my-2">
        <div className="card rounded-3 p-1 border-none shadow-sm ">
            <div>
                <img src="image/petimage.jpg" alt="" className="w-100 rounded-top-3 pet-image"/>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-between my-2">
                <h6 className="fw-bold">Pet Name</h6>
                <button className="secondary-bg btn c-primary fs-10 rounded-pill px-3 py-1">Avialable</button>
            </div>
            <div className="d-flex flex-row justify-content-end my-2">
                <div className="d-block text-center">
                    <p className="my-0 fs-10 fw-bold">Cost of Adoption</p>
                    <h2 className="fw-bold">3500 $</h2>
                </div>
            </div>
            <button className="btn primary-bg text-white fw-bold fs-13">
                Begin Adoption Process
            </button>
        </div>
    </div>
    <div className="col-lg-3 my-2">
        <div className="card rounded-3 p-1 border-none shadow-sm ">
            <div>
                <img src="image/petimage.jpg" alt="" className="w-100 rounded-top-3 pet-image"/>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-between my-2">
                <h6 className="fw-bold">Pet Name</h6>
                <button className="secondary-bg btn c-primary fs-10 rounded-pill px-3 py-1">Avialable</button>
            </div>
            <div className="d-flex flex-row justify-content-end my-2">
                <div className="d-block text-center">
                    <p className="my-0 fs-10 fw-bold">Cost of Adoption</p>
                    <h4 className="fw-bold">3500 $</h4>
                </div>
            </div>
            <button className="btn primary-bg text-white fw-bold fs-13">
                Begin Adoption Process
            </button>
        </div>
    </div>
    <div className="col-lg-3 my-2">
        <div className="card rounded-3 p-1 border-none shadow-sm ">
            <div>
                <img src="image/petimage.jpg" alt="" className="w-100 rounded-top-3 pet-image"/>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-between my-2">
                <h6 className="fw-bold">Pet Name</h6>
                <button className="secondary-bg btn c-primary fs-10 rounded-pill px-3 py-1">Avialable</button>
            </div>
            <div className="d-flex flex-row justify-content-end my-2">
                <div className="d-block text-center">
                    <p className="my-0 fs-10 fw-bold">Cost of Adoption</p>
                    <h4 className="fw-bold">3500 $</h4>
                </div>
            </div>
            <button className="btn primary-bg text-white fw-bold fs-13">
                Begin Adoption Process
            </button>
        </div>
    </div>
 </div>
        </>
    ) : (
       null
    )
 }
  {
    searchQuery &&  <div className="row">
    {
      products.map((pets) => {
             return(
               <>
                 <Petcomponent 
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