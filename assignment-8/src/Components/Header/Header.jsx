
import {Outlet} from "react-router-dom";
import {NavLink} from "react-router-dom";

const Header = () => {
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

                    </ul>
                    
                </div>
            </nav>
            <Outlet></Outlet> 
        </div>
    );
};

export default Header;