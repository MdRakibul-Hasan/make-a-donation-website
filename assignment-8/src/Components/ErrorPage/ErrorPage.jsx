import {useRouteError} from "react-router-dom";
import {NavLink} from "react-router-dom";
const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="flex flex-col justify-center align-middle items-center h-[100vh]">
            <div><h2 className="font-bold text-5xl flex justify-center mb-4">404</h2>
            <NavLink to="/"><button className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-800">Go to Home</button></NavLink></div>
        </div>
    );
};

export default ErrorPage;