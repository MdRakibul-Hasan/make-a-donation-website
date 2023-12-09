import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);
const handleLogin = e => {
    e.preventDefault();
    // console.log(e.currentTarget);
    // const form = new FormData(e.currentTarget);
const email = e.target.email.value;
const password = e.target.password.value;
console.log(email,password);
signIn(email, password)
.then(result => {
    console.log(result.user);
})
    .catch(error => {
        console.error(error);
    })
}


    return (
        <div>
{/* <h2 className="text-3xl">This is login</h2> */}
            <div className="hero min-h-screen bg-base-100">


    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
<form onSubmit={handleLogin}>
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
          <button className="btn btn-primary">Login</button>
        </div>
</form>
<p className="text-center mt-4">Don't have an account <Link to="/register" className="text-blue-500 font-bold">Register</Link> </p>
      </div>
    </div>
  </div>
</div>
       
    );
};

export default Login;