const getStoredDonationData = () => {
    const storedDonationData = localStorage.getItem('Donation-data');
if(storedDonationData){
    return JSON.parse(storedDonationData);
}
return [];

}

const saveDonation = id =>{
const storedDonationDatas = getStoredDonationData();
const exists = storedDonationDatas.find(donationId => donationId === id);
if(!exists){
    storedDonationDatas.push(id);
    localStorage.setItem('Donation-data', JSON.stringify(storedDonationDatas))
    
}
// console.log(storedDonationDatas)
}

export {saveDonation}
export {getStoredDonationData}