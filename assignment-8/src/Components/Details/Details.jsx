import {useLoaderData} from "react-router-dom";
import {useParams} from "react-router-dom";
import './Detail.css';
import Swal from 'sweetalert2';
import { saveDonation } from "../Utility/localStorage";
import {getStoredDonationData} from "../Utility/localStorage";




const Details = () => {
  
const details = useLoaderData()
const {id} = useParams();
const idInt = parseInt(id);
const DonationDetail = details.find(DonationDetail => DonationDetail.id === idInt);


const {image_high, title, category_bg, description, price} = DonationDetail || {}

const handleclick = () => {

const storedDonationIds = getStoredDonationData(); 

const myObject = DonationDetail;
const idArray = storedDonationIds;


if(idArray.includes(myObject.id)){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have already Donated here!',
        confirmButtonText:  'Save',
        footer: '<a href="/">Go Home</a>'
      })
}
else{
    saveDonation(idInt);
    Swal.fire(
        'Good job!',
        `Your Donation ${price}USD Successful`,
        'success'
      )
    }
}


return (
        <div>
            <div className="body">
    <div className="image-section">
        <img className="image" src={image_high} alt="Image"/>
        <div className="overlay">
            <button onClick={handleclick} style={{background:category_bg}} className="button">Donate ${price}</button>
        </div>
    </div>
</div>
<div className="text-2xl font-extrabold ml-32 pb-3"><h2>{title}</h2></div>
<div className="w-[80%] m-auto pb-24"><h5>{description}</h5></div>

        </div>
    );
};

export default Details;