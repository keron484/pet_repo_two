import Petcomponent from "../Components/Petcomponent";
import { favouritesList } from "../Redux/petslice";
import { useSelector } from 'react-redux';
import { Icon } from "@iconify/react";
import { Helmet } from "react-helmet";
function Favourites(){
    const favourite_array = useSelector(favouritesList);
    return(
        <>
                <Helmet>
        <meta charSet="utf-8" />
         <title>Facourites</title>
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
        <div className="container pt-5">
           <h3 className="text-center mt-4 fw-bold"> <span><Icon icon="fa-solid:paw" /></span> My Favourites <span><Icon icon="fa-solid:paw" /></span></h3>
           {
                   favourite_array.length <= 0 ? (
                       <div className="contact-box">
                        <div className="alert alert-warning">
                           Opps! You haven't added any pets to your 
                           faourites
                        </div>
                       </div>
                   ) : (
                    <>
                    <div className="row">
                    {
                      favourite_array.map((items) => {
                        return(
                         <>
                         <Petcomponent
                          id={items.id}
                          name={items.name}
                          price={items.price}
                          pet_image={items.image}
                         />
                         </>
                        )
                    })
                    }
                    </div>
                    </>
                   )
                 }
        </div>
        </>
    )
}
export default Favourites;