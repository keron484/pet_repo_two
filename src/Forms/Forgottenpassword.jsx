function Forgottenpassword(){
    return(
        <>
         <div className="container">
            <div className="login-box">
                <div className="card form-container px-3  rounded-4">
                    <form action="">
                    <div className="d-flex flex-row align-items-center justify-content-between my-2">
                        <p className="my-0"></p>
                        <h4 className="fw-bold">Account Recovery</h4>
                        <p className="my-0">$$</p>
                    </div>
                    <div className="my-4">
                        <p className="my-0">Email</p>
                        <input type="email" placeholder="Enter Your Email" className="form-control"/>
                    </div>
                    <div className="mt-4 w-100 mb-2">
                    <button className="text-white btn primary-bg w-100 fw-bold">
                        Send Verification code
                    </button>
                    </div>
                    </form>
                </div>
            </div>
         </div>
        </>
    )
}
export default Forgottenpassword;