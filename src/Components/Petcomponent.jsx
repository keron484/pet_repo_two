import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { petStoreActions } from '../Redux/petslice';
import useAuthContext from "../Context/authcontext";
import { useEffect } from "react";
function Petcomponent(props) {
  const { getUser, user, } = useAuthContext();
  useEffect(() => {
     if(user === null){
       getUser();
     }
  })
  const dispatch = useDispatch();
    const Favitems = useSelector((state) => state.pet.Favourites);
   const id = props.id;
   const name = props.name;
   const image = props.pet_image;
   const price = props.price;
  const Addtofav = () => {
    dispatch(petStoreActions.AddtoFavourites({
        id,
        name,
        image,
        price,
    }))
  }
  
  const isAdded = Favitems.some((items) => items.id === id);
  return (
    <>
      <div className="col-lg-3 my-3">
        <Link className="link" to={`/pet-details/${props.id}`}>
          <div className="card rounded-3 p-1 border-none shadow ">
            <div>
              <img
                src={require(`../../../server/public/petimages/${props.pet_image}`)}
                alt=""
                className="w-100 rounded-top-3 pet-image"
              />
            </div>
            <div className="d-flex flex-row align-items-center justify-content-between my-2">
              <h6 className="fw-bold">{props.name}</h6>
              <button className="secondary-bg btn c-primary fs-10 rounded-pill px-3 py-1">
                Avialable
              </button>
            </div>
            <div className="d-flex flex-row justify-content-end my-2">
              <div className="d-block text-center">
                <p className="my-0 fs-10 fw-bold">Cost of Adoption</p>
                <h2 className="fw-bold">{Number(props.price).toFixed(0)} $</h2>
              </div>
            </div>
           <Link className="link w-100 d-flex flex-row justify-content-between" to={user === null || user === '' ? '/login' : `/decription/${props.id}`}>
           <button 
            className="btn primary-bg text-white w-75 fs-13 py-2 fw-medium d-flex gap-2 justify-content-center align-items-center"
            >
              <span>Apply For Adoption</span>
            </button>
            <Link className="link py-0">
            <button className="border-none px-3  py-2 rounded-2" style={{ background:"#fef2f2" }} 
             onClick={() => {
               Addtofav();
             }}
            >
            <Icon icon={isAdded ? "mdi:heart" :  "mdi:heart-outline" }  className="fs-5" style={{ color:"#811b1b" }} />
            </button>
            </Link>
           </Link>
          </div>
        </Link>
      </div>
    </>
  );
}
export default Petcomponent;
