import {Link} from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { useContext } from 'react';

const Register = () => {
const {createUser} = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        // console.log(e.currentTarget);
        // const form = new FormData(e.currentTarget);
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password);

    createUser(email, password)
    .then((result) => {
        // Signed up 
        const user = result.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
        
    }

    return (
        <div>
{/* <h2 className="text-3xl">This is login</h2> */}
            <div className="hero min-h-screen bg-base-100">


    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
       
<form onSubmit={handleRegister}>
<div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" name="email" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" name="password" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
</form>
<p className="text-center mt-4">Already have an account? <Link to="/login" className="text-blue-500 font-bold">Login</Link> </p>
      </div>
    </div>
  </div>
</div>
       
    );
};

export default Register;