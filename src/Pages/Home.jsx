import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import axios from "../Api/axios";
import { Spinnerlong } from "../Components/Spinner";
import Petcomponent from "../Components/Petcomponent";
import { reduce_array_size } from "../Utils/functions";
function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pets, setPets] = useState([]);
  useEffect(() => {
    const handle_fetch = async () => {
      try {
        const response = await axios.get("api/pets");
        setLoading((prevalue) => (prevalue = false));
        setPets(response.data.pets);
      } catch (e) {
        if (e.response) {
          setError("An error occured during fetching");
        }
      }
    };
    handle_fetch();
  }, []);
  return (
    <>
      <div className="container">
        <section id="hero">
          <div className="">
            <div className="hero px-3 rounded-5 py-2 pt-4">
              <div className="row d-flex flex-row align-items-center">
                <div className="col-lg-5">
                  <p className="fs-5 my-4 fw-bold">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Consectetur
                  </p>
                  <h1 className="fw-bold">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit
                  </h1>
                  <p className="fs-6">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corrupti, odio omnis optio magnam aliquid accusamus
                    veritatis facere? Vel possimus sit quisquam
                  </p>
                  <NavLink to="/pet-list" className="link w-50">
                    <button className="mt-3 primary-bg btn w-50 text-white rounded-pill py-2">
                      I want to Adopt
                    </button>
                  </NavLink>
                </div>
                <div className="col-lg-7">
                  <img
                    src="/image/hero-img.png"
                    alt=""
                    className="hero-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="row">
            <div className="col-lg-12">
              <h2 className="fw-bold text-center my-3">How it Works</h2>
              <div className="d-flex flex-row align-items-center gap-2 justify-content-center my-3">
                <div className="d-flex flex-column align-items-center text-center gap-3">
                  <p className="my-0 fw-bold">Step One</p>
                  <div className="badge-lg primary-bg text-white fw-bold fs-5 c-primary">
                    1
                  </div>
                  <p>Find A Pet</p>
                </div>
                <hr className="w-25" />
                <div className="d-flex flex-column align-items-center gap-3 text-center">
                  <p className="my-0 fw-bold">Step Two</p>
                  <div className="badge-lg secondary-bg fw-bold fs-5">2</div>
                  <p className="my-1 ">Apply For Adoption</p>
                </div>
                <hr className="w-25" />
                <div className="d-flex flex-column align-items-center gap-3 text-center">
                  <p className="my-0 fw-bold">Step three</p>
                  <div className="badge-lg secondary-bg fw-bold fs-5">3</div>
                  <p>Pay for Adoption</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-center fw-bold my-4">How it started</h2>
          <div className="mx-2">
            <div className="row">
              <div className="col-lg-7">
                <h4 className="text-start fw-bold mt-4">About Us</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis, ullam velit, cum itaque ex, quidem reprehenderit
                  necessitatibus rem recusandae commodi dicta quas praesentium
                  eos quaerat illum aliquid eaque optio vero!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis, ullam velit, cum itaque ex, quidem reprehenderit
                  necessitatibus rem recusandae commodi dicta quas praesentium
                  eos quaerat illum aliquid eaque optio vero!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis, ullam velit, cum itaque ex, quidem reprehenderit
                  necessitatibus rem recusandae commodi dicta quas praesentium
                  eos quaerat illum aliquid eaque optio vero!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis, ullam velit, cum itaque ex, quidem reprehenderit
                  necessitatibus rem recusandae commodi dicta quas praesentium
                  eos quaerat illum aliquid eaque optio vero!
                </p>
              </div>
              <div className="col-lg-5">
                <img src="image/about.jpg" alt="" className="about-img" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-center fw-bold my-4">Waiting For A new Home</h2>
          <div className="row d-flex flex-row align-items-center">
            {loading ? (
              <Spinnerlong />
            ) : pets.length > 0 ? (
              <>
                {reduce_array_size(pets, 0, 3).map((pet) => {
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
            <div className="col-lg-3">
              <Link className="link" to="/pet-list">
                <button className="gap-2 w-50 primary-bg text-white d-flex flex-row align-items-center border-none py-2 justify-content-between rounded-5 px-2">
                  <Icon icon="ri:more-fill" className="text-white fs-3" />
                  <p className="my-0 fs-6">See More</p>
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section id="reviews">
          <h2 className="text-center fw-bold my-4">
            What our clients have been saying
          </h2>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 my-4">
                <div className=" d-flex flex-row justify-content-center">
                  <div className="card rounded-4 p-2 w-75 linear-gradient">
                    <div className="d-flex flex-row justify-content-center">
                      <div className="my-2">
                        <img
                          src="portrait/portrait-two.jpg"
                          alt=""
                          className="object-fit-cover badge-img "
                        />
                      </div>
                    </div>
                    <h4 className="fw-bold text-center">Username</h4>
                    <div className="d-flex">
                      <p>
                        <span className="mx-1">
                          <Icon
                            icon="icomoon-free:quotes-left"
                            className="fs-4"
                          />
                        </span>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Incidunt labore, laborum corrupti sunt cupiditate
                        necessitatibus, unde perspiciatis aliqua ipsa error
                        impedit temporibus, quis voluptatem tempore blanditiis.
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Incidunt labore, laborum corrupti sunt cupiditate
                        necessitatibus, unde perspiciatis aliqua ipsa error
                        impedit temporibus, quis voluptatem tempore blanditiis.
                        <span className="mx-1">
                          <Icon
                            icon="icomoon-free:quotes-right"
                            className="fs-4"
                          />
                        </span>
                      </p>
                    </div>
                    <div className="d-flex gap-2 flex-row justify-content-between mb-2 align-items-center">
                      <p className="my-0 fs-12">Ratings</p>
                      <div className="d-flex flex-row gap-2 icon-color">
                        <span>
                          <Icon icon="ph:star-fill" className="fs-5" />
                        </span>
                        <span>
                          <Icon icon="ph:star-fill" className="fs-5" />
                        </span>
                        <span>
                          <Icon icon="ph:star-fill" className="fs-5" />
                        </span>
                        <span>
                          <Icon icon="ph:star-fill" className="fs-5" />
                        </span>
                        <span>
                          <Icon icon="ph:star-fill" className="fs-5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 my-4">
                <div className=" d-flex flex-row justify-content-center">
                  <div className="card rounded-4 p-2 w-75 cart-active ">
                    <div className="d-flex flex-row justify-content-center">
                      <div className="my-2">
                        <img
                          src="portrait/portrait-one.jpg"
                          alt=""
                          className="object-fit-cover badge-img-active"
                        />
                      </div>
                    </div>
                    <h4 className="fw-bold text-center">Username</h4>
                    <div className="d-flex">
                      <p>
                        <span className="mx-1">
                          <Icon
                            icon="icomoon-free:quotes-left"
                            className="fs-4"
                          />
                        </span>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Incidunt labore, laborum corrupti sunt cupiditate
                        necessitatibus, unde perspiciatis aliqua ipsa error
                        impedit temporibus, quis voluptatem tempore blanditiis.
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Incidunt labore, laborum corrupti sunt cupiditate
                        necessitatibus, unde perspiciatis aliqua ipsa error
                        impedit temporibus, quis voluptatem tempore blanditiis.
                        <span className="mx-1">
                          <Icon
                            icon="icomoon-free:quotes-right"
                            className="fs-4"
                          />
                        </span>
                      </p>
                    </div>
                    <div className="d-flex gap-2 flex-row justify-content-between mb-2">
                      <p className="my-0 fs-12">Ratings</p>
                      <div className="d-flex flex-row gap-2 icon-color">
                        <span>
                          <Icon icon="ph:star-fill" className="fs-5" />
                        </span>
                        <span>
                          <Icon icon="ph:star-fill" className="fs-5" />
                        </span>
                        <span>
                          <Icon icon="ph:star-fill" className="fs-5" />
                        </span>
                        <span>
                          <Icon icon="ph:star-fill" className="fs-5" />
                        </span>
                        <span>
                          <Icon icon="ph:star-fill" className="fs-5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 my-4">
                <div className=" d-flex flex-row justify-content-center">
                  <div className="card rounded-4 p-2 w-75 linear-gradient">
                    <div className="d-flex flex-row justify-content-center">
                      <div className=" my-2">
                        <img
                          src="portrait/portrait-five.jpg"
                          alt=""
                          className="object-fit-cover badge-img"
                        />
                      </div>
                    </div>
                    <h4 className="fw-bold text-center">Username</h4>
                    <div className="d-flex">
                      <p>
                        <span className="mx-1">
                          <Icon
                            icon="icomoon-free:quotes-left"
                            className="fs-4"
                          />
                        </span>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Incidunt labore, laborum corrupti sunt cupiditate
                        necessitatibus, unde perspiciatis aliqua ipsa error
                        impedit temporibus, quis voluptatem tempore blanditiis.
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Incidunt labore, laborum corrupti sunt cupiditate
                        necessitatibus, unde perspiciatis aliqua ipsa error
                        impedit temporibus, quis voluptatem tempore blanditiis.
                        <span className="mx-1">
                          <Icon
                            icon="icomoon-free:quotes-right"
                            className="fs-4"
                          />
                        </span>
                      </p>
                    </div>
                    <div className="d-flex flex-row justify-content-between align-items-center mb-2 ">
                      <p className="my-0 fs-12">Ratings</p>
                      <div className="d-flex flex-row gap-2 icon-color">
                        <span>
                          <Icon icon="ph:star-fill" className="fs-5" />
                        </span>
                        <span>
                          <Icon icon="ph:star-fill" className="fs-5" />
                        </span>
                        <span>
                          <Icon icon="ph:star-fill" className="fs-5" />
                        </span>
                        <span>
                          <Icon icon="ph:star-fill" className="fs-5" />
                        </span>
                        <span>
                          <Icon icon="ph:star-fill" className="fs-5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="w-100 primary-bg footer-section mt-5">
        <div className="container">
          <footer className="py-5">
            <div className="row">
              <div className="col-6 col-md-2 mb-3">
                <h3 className="fw-bold">Pethaven</h3>
                <p>Lorem ipsum dolor, sit amet consectetur uibusdam autem?
                   Accusamus
                </p>
              </div>
              <div className="col-6 col-md-2 mb-3">
                <h5>Short Links</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link
                      to="/#hero"
                      className="nav-link p-0 text-body-secondary"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/" className="nav-link p-0 text-body-secondary">
                      Pets
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/" className="nav-link p-0 text-body-secondary">
                      FAQs
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/" className="nav-link p-0 text-body-secondary">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-2 mb-3">
                <h5>Address</h5>
                <ul className="nav flex-column">
                  <p className="my-0 ">
                    Lorem ipsum dolor sit amet consecteturatis
                  </p>
                  <span>+1 2378 4839</span>
                </ul>
              </div>
              <div className="col-md-5 offset-md-1 mb-3">
                <form>
                  <h5>Subscribe to our newsletter</h5>
                  <p>Monthly digest of what's new and exciting from us.</p>
                  <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">
                      Email address
                    </label>
                    <input
                      id="newsletter1"
                      type="text"
                      className="form-control"
                      placeholder="Email address"
                    />
                    <button className="btn btn-primary" type="button">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <hr className="w-100"/>
            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4">
              <p>© 2024 Company, Inc. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
}
export default Home;
