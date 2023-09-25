
const DonationCard = ({donationdonecard}) => {
    const {id, image_square, title, category, category_bg, card_bg, text_button_bg, price} = donationdonecard || {}
    return (
        <div>
            <div style={{background:card_bg}} className="flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={image_square} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
    <div style={{background:text_button_bg, color:category_bg, alignSelf: "flex-start"}} className={`inline-flex items-center px-3 py-1 text-sm font-medium text-center}] text-white  rounded-lg`}>
                {category}          
            </div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p style={{color:category_bg}} className="mb-3 font-normal text-gray-700 dark:text-gray-400">${price}</p>
        <a href="#" style={{background:category_bg, color:"#ffffff", alignSelf: "flex-start"}} className={`inline-flex items-center px-4 py-2 text-sm font-medium text-center}] text-white  rounded-md`}>
        View Details          
            </a>
    </div>
</div>
        </div>
    );
};

export default DonationCard;