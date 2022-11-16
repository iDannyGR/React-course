import React from 'react';


const LoginForm = () => {
  return (

      <div className="col-md-6 offset-md-3">
        <h2 className="text-dark mt-5">Login</h2>
        <div className="card my-5">
          <form className="card-body cardbody-color p-lg-5 shadow-lg rounded-4">
            <div>
              <img src="/assets/user.svg" className="img-fluid profile-image-pic rounded-circle my-3"
                width="200px" alt="" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="Username">User Name</label>
              <input type="text" className="form-control w-75" id="Username" aria-describedby="emailHelp"
                placeholder="User Name" />
            </div>
            <div className="mb-3 form-group">
              <label htmlFor="password" className='form-label-control'>password</label>
              <input type="password" className="form-control w-75" id="password" placeholder="password" />
            </div>
            <div><button className="btn btn-color btn-primary px-5 mb-3 ">Login</button></div>
          </form>
        </div>
      </div>
  )
}
export default LoginForm