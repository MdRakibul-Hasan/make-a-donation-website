
const Cards = ({card}) => {

 const {id, picture, title, category, category_bg, card_bg, text_button_bg} = card || {}
console.log(category_bg);
    return (
        
            <div>
    
    <div style={{background:card_bg}} className="max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img className="rounded-t-lg" src={picture} alt="" />
        </a>
        <div className="p-5">
        <a href="#" style={{background:text_button_bg, color:category_bg}} className={`inline-flex items-center px-3 py-1 text-sm font-medium text-center}] text-white  rounded-lg`}>
                {category}
                 
            </a>
            <a href="#">
                <h5 style={{color:category_bg, fontWeight:"bold"}} className={`mb-2 text-lg font-extrabold]`}>{title}</h5>
            </a>
            
            
        </div>
    </div>
    
    </div>
        
    );
};

export default Cards;