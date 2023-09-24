import {Link} from "react-router-dom";
import {Outlet} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="flex justify-between items-center mx-24 mt-2">
                <img className="w-[170px]" src="https://ebook.projectbd.com/wp-content/uploads/2023/09/Logo.png" alt="" />

                <div>
                    <ul className="flex gap-8">
                    <li><Link to="/">Home</Link></li>
                        <li><Link to="/donation">Donation</Link></li>
                        <li><Link to="/statistics">Statistics</Link></li>
                    </ul>
                </div>
            </nav>
            <Outlet></Outlet> 
        </div>
    );
};

export default Header;