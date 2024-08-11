import '../css/timeline.css';
import { Icon } from '@iconify/react';
function Timeline(){
    return (
      <>
        <div className="timeline_box">
          <ul>
            <li>
              <div className="d-flex flex-row align-items-center justify-content-start gap-1">
               <div className="badge-sm">
               <Icon icon="streamline:pet-paw-solid" />
               </div>
              <h3 className="heading fw-bold">Find A Pet</h3>
              </div>
              <p className='text-start'>
              Browse our selection of adorable pets to find your perfect match based on breed, size, and personality.{" "}
              </p>
              <span className="date">Step One</span>
              <span className="circle" />
            </li>
            <li>
                <div className="d-flex flex-row align-items-center justify-content-start gap-1">
                <div className="badge-sm">
                <Icon icon="mdi:application-edit" />
               </div> 
              <h3 className="heading fw-bold">Apply For Adoption</h3>
                </div>
              <p>
              Complete our simple adoption application to help us understand your home and ensure a great fit{" "}
              </p>
              <span className="date">Step Two</span>
              <span className="circle" />
            </li>
            <li>
            <div className="d-flex flex-row align-items-center justify-content-start gap-1">
                <div className="badge-sm">
                <Icon icon="mdi:auto-pay" />
               </div> 
               <h3 className="heading  fw-bold text-start">Pay For Adoption Process</h3>
                </div>
              
              <p className='my-0 text-start'>
              Finalize your adoption by paying a fee that supports our care for the pets. We'll guide you on welcoming your new friend home{" "}
              </p>
              <span className="date">Step Three</span>
              <span className="circle" />
            </li>
          </ul>
        </div>
      </>
    );
}
export default Timeline;