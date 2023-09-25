

import { useEffect, useState } from "react";
import {useLoaderData} from "react-router-dom";
import {getStoredDonationData} from "../Utility/localStorage";
import DonationCard from "./DonationCard";


const Donation = () => {

const donations = useLoaderData();

const [appliedDonations, setAppliedDonations] = useState([]);

const [dataLength, setDataLength] = useState(4);

useEffect( () => {
    const storedDonationIds = getStoredDonationData();
    if(donations.length > 0){
        // const DonationDone = donations.filter(donation => storedDonationIds.includes(donation.id))
        // console.log(DonationDone);
const donationDone = [];
for(const id of storedDonationIds) {
    const donation = donations.find(donation => donation.id === id);
    if(donation){
        donationDone.push(donation)
    }
}
setAppliedDonations(donationDone);


    }
},[donations])
    return (
        <div>
<div key={appliedDonations.id} className="md: grid grid-cols-2 gap-5 px-20 mt-14">
{appliedDonations.slice(0, dataLength).map(donationdonecard => <DonationCard key={donationdonecard.id} donationdonecard={donationdonecard}></DonationCard>)
            }
</div>
<div className="flex flex-row justify-center align-middle items-center py-14">
    <button
    onClick={() => setDataLength(appliedDonations.length)}
    className="bg-[#009444] text-white py-1 px-4 rounded-md">See All</button>
</div>

        </div>
    );
};

export default Donation;

