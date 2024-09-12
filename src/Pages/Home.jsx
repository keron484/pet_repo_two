import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import axios from "../Api/axios";
import { Spinnerlong } from "../Components/Spinner";
import Petcomponent from "../Components/Petcomponent";
import { reduce_array_size } from "../Utils/functions";
import Timeline from "../Components/Timeline";
import '../Utils/functions';
import toast from "react-hot-toast";
import {Helmet} from "react-helmet";
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
      <Helmet>
         <meta charSet="utf-8" />
         <title>Home</title>
         <link rel="canonical" href="http://mysite.com/example" />
         <meta property="og:title" content="Petpalsadoption - Your Ultimate Pet Adoption Service" />
    <meta property="og:description" content="Welcome to Petpalsadoption! Discover your perfect furry friend. Join us in giving pets a loving home." />
    <meta property="og:image" content="https://yourwebsite.com/images/logo.jpg" /> 
    <meta property="og:url" content="https://Petpalsadoption.com/" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Petpalsadoption - Your Ultimate Pet Adoption Service" />
    <meta name="twitter:description" content="Welcome to Petpalsadoption! Discover your perfect furry friend. Join us in giving pets a loving home." />
    <meta name="twitter:image" content="https://yourwebsite.com/images/logo.jpg" /> 
    <meta name="twitter:url" content="https://Petpalsadoption.com/" />
      </Helmet>
      <div className="container">
        <section>
            <div className="hero px-1 rounded-5 py-2 pt-4">
              <div className="container">
              <div className="row d-flex flex-row align-items-center">
                <div className="col-lg-5">
                  <p className="fs-5 my-4 fw-medium">
                  Trusted by families, loved by pets. Find your perfect companion at Petpalsadoption!
                  </p>
                  <h1 className="fw-bold">
                  Your new <span style={{ color:"#FF67B9" }}>best friend</span> awaits at Petpalsadoption
                  where <span style={{ color:"#FF67B9" }}> love </span>, <span style={{ color:"#FF67B9" }}>care</span>, and <span style={{ color:"#FF67B9" }}>
                  trust
                    </span> unite!
                  </h1>
                  <p className="fs-6">
                  At Petpalsadoption, we match loving families with wonderful pets. 
                  Our team ensures each animal is healthy and ready for adoption!
                  </p>
                  <NavLink to="/pet-list" className="link w-50">
                    <button className="mt-3 primary-bg btn w-50 text-white rounded-pill py-3 fw-medium">
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

        <section className="mt-5">
          <h2 className="text-center fw-bold my-4">How it Works</h2>
          <div className="container py-5">
            <div className="d-flex flex-row justify-content-center">
            <Timeline />
            </div>
          </div>
        </section>

        <section id="about">
          <h2 className="text-center fw-bold my-4">How it started</h2>
          <div className="mx-2">
            <div className="row">
              <div className="col-lg-7">
                <h4 className="text-start fw-bold mt-4">About Us</h4>
                <p>
                At Petpalsadoption, we believe every pet deserves a loving home. 
                Our mission is to make the online pet adoption process easy 
                and reliable. Our team carefully vets each animal to ensure they 
                are healthy and ready to find their forever home.
                </p>
                <p>
                We provide detailed profiles for each pet on our website, 
                including temperament and health history. Virtual meet-and-greets
                 allow you to connect with potential companions before adopting. 
                 Our team is always available to answer your questions and provide support
                </p>
                <p>
                Our commitment to adopters doesn't end once you bring your pet home. 
                We offer resources like training tips and access to a community of fellow 
                pet owners to help you navigate pet ownership successfully
                </p>
                <p>
                With secure technology and a focus on transparency, Petpalsadoption makes
                 adoption straightforward and trustworthy. Join us in creating lasting bonds
                  between pets and their loving families!
                </p>
              </div>
              <div className="col-lg-5">
                <img src="image/about.jpg" alt="" className="about-img" />
              </div>
            </div>
          </div>
        </section>
        <section>
        <div>
          <h2 className="text-center fw-bold my-5">Our Services</h2>
          <div className="container">
            <div className="row">
            <div className="col-lg-3">
                <div className="card px-2 py-2 rounded-4 my-2 shadow border-none ">
                 <div className="d-flex flex-row justify-content-center">
                 <div className="circle my-2">
                  <Icon icon="fluent-emoji-high-contrast:paw-prints" className="fs-1 text-white"/>
                  </div>
                 </div>
                  <h2 className="text-center fs-4 fw-bold my-4">
                  Pet Adoption Services
                  </h2>
                  <p className="my-0 text-start text-secondary">
                  Find your perfect companion! We offer a variety of adoptable pets
                   and help match you based on your lifestyle. Start your journey of love today!
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card px-2 py-2 rounded-4 my-2 shadow">
                 <div className="d-flex flex-row justify-content-center">
                 <div className="circle">
                 <Icon icon="clarity:resource-pool-solid-badged" className="fs-1 text-white"/>
                  </div>
                 </div>
                  <h2 className="text-center fs-4 fw-bold my-3">Pet Care Resources</h2>
                  <p className="my-0 text-start text-secondary">
                  Empower yourself with essential information! Access training tips,
                   health care guidance, and nutrition advice to ensure the best start for your new pet
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card px-2 py-2 rounded-4 my-2 shadow">
                 <div className="d-flex flex-row justify-content-center">
                 <div className="circle">
                 <Icon icon="streamline:health-care-2-solid" className="fs-1 text-white"/>
                  </div>
                 </div>
                  <h2 className="text-center fs-4 fw-bold my-3"> Foster Care Program</h2>
                  <p className="my-0 text-start text-secondary">
                  Become a hero! Open your home to pets in need while they wait for adoption.
                   Your care helps make them more adoptable and gives them a loving environment.
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card px-2 py-2 rounded-4 my-2 shadow">
                 <div className="d-flex flex-row justify-content-center">
                 <div className="circle">
                 <Icon icon="fluent:people-community-12-filled" className="fs-1 text-white" />
                  </div>
                 </div>
                  <h2 className="text-center fs-4 fw-bold my-3">
                  Community Events
                  </h2>
                  <p className="my-0 text-start text-secondary">
                  Join our pet-loving community! Participate in events like adoption drives 
                  and workshops to promote awareness about pet adoption and responsible pet care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
       </section>
        <section>
          <h2 className="text-center fw-bold my-5">Waiting For A new Home</h2>
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
                    <h4 className="fw-bold text-center">Sarah M</h4>
                    <div className="d-flex">
                      <p>
                        <span className="mx-1">
                          <Icon
                            icon="icomoon-free:quotes-left"
                            className="fs-4"
                          />
                        </span>
                        I cannot express how grateful I am to have found my furry best friend through
                        Petpalsadoption! The staff was incredibly caring and knowledgeable, helping us find
                        the perfect match for our family. Our dog, Bella, has brought so much joy 
                        into our lives. Thank you, Petpalsadoption!
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
                    <h4 className="fw-bold text-center"> Mark T</h4>
                    <div className="d-flex">
                      <p>
                        <span className="mx-1">
                          <Icon
                            icon="icomoon-free:quotes-left"
                            className="fs-4"
                          />
                        </span>
                        Petpalsadoption made the adoption process smooth and easy. The team was very 
                        supportive and answered all our questions. We adopted Max, a playful 
                        tabby cat, and he has quickly become a beloved member of our family. 
                        Highly recommend!
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
                    <h4 className="fw-bold text-center">Jenny L</h4>
                    <div className="d-flex">
                      <p>
                        <span className="mx-1">
                          <Icon
                            icon="icomoon-free:quotes-left"
                            className="fs-4"
                          />
                        </span>
                        I had a wonderful experience at Petpalsadoption! The facilities were clean,
                         and the animals were well cared for. The staff took the time to 
                         understand what I was looking for, and I found Lucy, the sweetest 
                         Labrador. She fits right in with our family!
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
                <p>Trusted by families, loved by pets
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
                    <Link to="/pet-list" className="nav-link p-0 text-body-secondary">
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
                 <div>
                  <p>
                  Contact Us: Petpalsadoption.com
                  </p>  
                  <p>
                  Business Hours  : Always Open 
                  </p>
                 </div>
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
                    <button className="btn btn-dark" type="button"
                     onClick={() => {
                       toast.success("Succesfully suscribed to our news letter");
                     }}
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <hr className="w-100"/>
            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4">
              <p>© 2024 Pethaven, Inc. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
}
export default Home;
