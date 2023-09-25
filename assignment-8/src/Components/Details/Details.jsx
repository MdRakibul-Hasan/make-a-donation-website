import {useLoaderData} from "react-router-dom";
import {useParams} from "react-router-dom";
import './Detail.css';
import Swal from 'sweetalert2';


const Details = () => {

const details = useLoaderData()
const {id} = useParams();
const idInt = parseInt(id);
const DonationDetail = details.find(DonationDetail => DonationDetail.id === idInt);

const {picture, title, category, category_bg, card_bg, text_button_bg, description, price} = DonationDetail || {}

const handleclick = () => {
    Swal.fire(
        'Good job!',
        `Your Donation ${price}USD Successful`,
        'success'
      )
}


return (
        <div>
            <div className="body">
    <div className="image-section">
        <img className="image" src={picture} alt="Image"/>
        <div className="overlay">
            <button onClick={handleclick} style={{background:category_bg}} className="button">Donate ${price}</button>
        </div>
    </div>
</div>
<div className="w-[80%] m-auto pb-24"><h5>{description}</h5></div>

        </div>
    );
};

export default Details;