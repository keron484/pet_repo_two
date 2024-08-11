import { useEffect, useState } from "react"
import axios from "../Api/axios";
import { Spinnerlong } from "./Spinner";
import { Icon } from "@iconify/react";
import { formatDate, filter_array_by_status } from "../Utils/functions";
function Pendingorders(props){
    const [ data, setData ] = useState();
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);
    useEffect(() => {
        const handle_fetch = async () => {
             try{
                 const response = await axios.get(`api/my-applications/${props.id}`);
                 setData(response.data.my_applications);
                 setLoading(false);
             }
             catch(e){
                setError("Something went wrong");
                setLoading(false);
             }
        }
        handle_fetch();
    }, [])
    return (
      <>
        {loading ? (
          <>
            <Spinnerlong />
          </>
        ) : data.length > 0 ? (
          <>
            {filter_array_by_status(data, 'Pending').map((items) => {
              return (
                <>
                  <div className="card primary-bg text-white p-2 rounded-4 shadow my-2">
                    <div className="d-flex flex-row align-items-center gap-2 mb-2">
                      <div
                        className="badge d-flex flex-row justify-content-center align-items-center"
                        style={{
                          background: "#fea3a3",
                          width: "4rem",
                          height: "4rem",
                        }}
                      >
                        <Icon
                          icon="fluent-emoji-high-contrast:paw-prints"
                          className="fs-2"
                        />
                      </div>
                      <div className="d-block">
                        <p className="my-0 fs-6">{items.id}</p>
                        <p className="my-0 fs-6"> {formatDate(items.created_at)}</p>
                        <p className="my-0 fs-6">Single</p>
                      </div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <p className="fw-bold">PetName</p>
                      <p>{items.pet.name}</p>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <p className="fw-bold">Breed</p>
                      <p>{items.pet.breed}</p>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <p className="fw-bold">Adoption Fee</p>
                      <p>{Number(items.pet.price).toFixed(0)} $</p>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <p className="fw-bold">Status</p>
                      <p>{items.status}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </>
        ) : (
          <div className="alert alert-danger">{error}</div>
        )}
      </>
    );
}
export default Pendingorders;