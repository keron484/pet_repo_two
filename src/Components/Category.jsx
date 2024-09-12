import axios from "../Api/axios";
import { useEffect, useState } from "react";
import { scrollto, reduce_array_size } from "../Utils/functions";
import { Spinnerlong } from "./Spinner";
function Category(){
    const [ category, setCategory ] = useState([]);
    const [ error, setError ] = useState(null);
    const [ toggle, setToggle ] = useState("all");

    useEffect(() => {
       const handle_fetch = async () => {
           try{
              const response = await axios.get('api/get-petcategory');
              setCategory(response.data.petcategories);    
           }
           catch(e){
              if(e.response){
                setError("Something went wrong");
              }
           }
       }
       handle_fetch();
    }, [])
    const handle_toggle = (category) => {
         setToggle(category);
    }
    return(
        <>
        {
            error ? (
                <div className="alert alert-warning">
                    {
                        error
                    }
                </div>
            ) : (
                <div className="d-flex flex-row gap-2 category-list">
           <button  className={toggle === "all" ? 
             "border-none primary-bg rounded-pill text-white fs-13 px-3 py-2" 
            : "secondary-bg primary-border rounded-pill c-primary fs-13 px-3 py-2"}
             onClick={ () => {
                handle_toggle('all')
             }}
            >All
            </button>
        {
            category.map((items) => {
                return(
                    <>
                     <button  className={toggle === items.name ? 
                     "border-none primary-bg rounded-pill text-white fs-13 px-3 py-2 cat-btn" 
                     : "secondary-bg primary-border rounded-pill c-primary fs-13 px-3 py-2 cat-btn"}
                      onClick={() => {
                        handle_toggle(items.name)
                        scrollto(items.name)
                      }}
                     >{items.name}
                     </button>
                    </>
                )
            })
        }
        </div>
            )
        }
        </>
    )
}
export default Category;

export function Categorytwo(props){
    const [ loading, setLoading ] = useState(true);
    const [ categories, setCategories ] = useState([]);
    const [ error, setError ] = useState(null);
    useEffect(() => {
       const handle_fetch = async () => {
        try{
            const response = await axios.get('api/get-petcategory');
            setCategories(response.data.petcategories);
            setLoading((prevalue) => prevalue = false); 
        } 
        catch{
            setError("Something went wrong !! check internet connection");
            setLoading((prevalue) => prevalue = false);
        }
       }
       handle_fetch();
    }, [])
     return(
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
                   <button 
                   className="btn primary-bg col-lg-1 mx-1 col-xsm-2 fs-13  text-white rounded-5 my-2"
                   onClick={() => { props.search_func(items.name) }}
                   >
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
              Something went wrong check internet connectionnad try again
             </div>
          )
       }
      </div> 
    </div>
        </>
     )
}