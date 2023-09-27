import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
const Cards = ({card}) => {

 const {id, picture, title, category, category_bg, card_bg, text_button_bg} = card || {}

    return (
        
            <div>
    
    <Link to={`/cardDetails/${id}`}><div style={{background:card_bg}} className="max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Link to={`/cardDetails/${id}`}>
            <img className="rounded-t-lg" src={picture} alt="" />
        </Link>
        <div className="p-5">
        <Link to={`/cardDetails/${id}`} style={{background:text_button_bg, color:category_bg}} className={`inline-flex items-center px-3 py-1 text-sm font-medium text-center}] text-white  rounded-lg`}>
                {category}
                 
            </Link>
            
                <h5 style={{color:category_bg, fontWeight:"bold"}} className={`mb-2 text-lg font-extrabold]`}>{title}</h5>
            
            
            
        </div>
    </div></Link>
    
    </div>
        
    );
};

export default Cards;

Cards.propTypes = {
 
    card: PropTypes.object
}