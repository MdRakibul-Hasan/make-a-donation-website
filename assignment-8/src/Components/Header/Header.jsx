
import { useContext } from "react";
import {Outlet} from "react-router-dom";
import {NavLink, Link} from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
const {user, logOut} = useContext(AuthContext);

const handleSignOut = () =>{
 logOut()
 .then()
 .catch()
}

    return (
        <div>
            <nav className="flex justify-between items-center mx-24 mt-2 md:flex flex-wrap">
            <NavLink to="/"><img className="w-[170px]" src="https://ebook.projectbd.com/wp-content/uploads/2023/09/Logo.png" alt="" /></NavLink>

                <div>
                    <ul className="flex gap-8">
                    <li><NavLink to="/" className={({isActive, isPending})=>
                isPending ? "pending" : isActive ? "text-red-600 underline" : ""}>Home</NavLink></li>
                <li><NavLink to="/donation" className={({isActive, isPending})=>
                isPending ? "pending" : isActive ? "text-red-600 underline" : ""}>Donation</NavLink></li>
                <li><NavLink to="/statistics" className={({isActive, isPending})=>
                isPending ? "pending" : isActive ? "text-red-600 underline" : ""}>Statistics</NavLink></li>
                {
                    user? <button onClick={handleSignOut} className="btn">Sign Out</button>
                    : 
                    <Link to="/login"><button className="btn">Login</button></Link>
                }


                
                    </ul>
                    
                </div>
            </nav>
            <Outlet></Outlet> 
        </div>
    );
};

export default Header;