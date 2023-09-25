import {useLoaderData} from "react-router-dom";
import './Home.css';
import { useEffect, useState } from "react";
import Cards from "./Cards";

const Home = () => {
const cards = useLoaderData()

// const [cards,setCards] = useState([])

// useEffect(()=> {
//       fetch(`data.json`)
//       .then(res=>res.json())
//       .then(data=>setCards(data.cards))
// },[])
    return (
        <div> 
            <div className="banner">              
  <img className="banner-background" src="https://ebook.projectbd.com/wp-content/uploads/2023/09/fc1f79e18cdc1a12320b9b10ec3e253d.jpeg" alt="Banner Background"/>
  <div className="banner-content">
    <h1>I Grow By Helping People In Need</h1>
    <div>
    <input type="text" placeholder="Search here...."/>
    <button>Search</button>
    </div>
  </div>
</div>
{/* Hero section ends here ==================*/}
<div className="md: grid grid-cols-4 gap-4 px-14 mt-14">
{cards.map(card => <Cards key={cards.id} card={card}></Cards>)
            }
</div>

         
        </div>
    );
};

export default Home;