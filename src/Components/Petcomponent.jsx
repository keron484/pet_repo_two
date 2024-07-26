import { Link } from "react-router-dom";
function Petcomponent(props) {
  return (
    <>
      <div className="col-lg-3 my-3">
        <Link className="link" to={`/pet-details/${props.id}`}>
          <div className="card rounded-3 p-1 border-none shadow-sm ">
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
            <button 
            className="btn primary-bg text-white fs-13 py-2 fw-bold"
            >
              Chat With Owner
            </button>
          </div>
        </Link>
      </div>
    </>
  );
}
export default Petcomponent;
