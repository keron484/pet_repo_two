import axios from "../Api/axios";
import { useEffect, useState } from "react";
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