import {useLoaderData} from "react-router-dom";
import { useState } from "react";
import './Home.css';
import Cards from "./Cards";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

const notify = () => toast.error('No results found. Please try a different search.', {
  position: "top-center",
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  });
const cards = useLoaderData()
const [search,setSearch] = useState('');
const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = cards.filter((card) =>
      card.category.toLowerCase().includes(search.toLowerCase())
    );


  if (results.length === 0) {
    // alert(' No results found. Please try a different search.')
    notify();
   
  } 

  setSearchResults(results);
};

const handleKeyPress = (e) => {
  if (e.key === 'Enter') {
    handleSearch();
  }
};

return (
  <div>
     <ToastContainer />
    <div className="banner">
      <img
        className="banner-background"
        src="https://ebook.projectbd.com/wp-content/uploads/2023/09/fc1f79e18cdc1a12320b9b10ec3e253d.jpeg"
        alt="Banner Background"
      />
      <div className="banner-content">
        <h1>I Grow By Helping People In Need</h1>
        <div>
          <input
            type="text"
            placeholder="Search here...."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={handleKeyPress} 
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>

    <div className="md:grid grid-cols-4 gap-4 px-14 mt-14 pb-9">
        {searchResults.length === 0
          ? cards.map((card) => <Cards key={card.id} card={card}></Cards>)
          : searchResults.map((card) => (
              <Cards key={card.id} card={card}></Cards>
            ))}
      </div>

    </div>
  );
};

export default Home;