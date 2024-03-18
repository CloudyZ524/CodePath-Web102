import { useState } from 'react';
import Cat from './components/Cat'
import BanList from './components/BanList'
import './App.css'

function App() {
  const [cat, setCat] = useState(null);
  const [banAttribute, setBanAttribute] = useState({});
  const breedIds = [
    "abys", "aege", "abob", "acur", "asho", "awir", "amau", "amis", "bali", "bamb", 
    "beng", "birm", "bomb", "bslo", "bsho", "bure", "buri", "cspa", "ctif", "char" ];
  const URL = "https://api.thecatapi.com/v1/images/search?breed_ids="
  const catInfoURL = "https://api.thecatapi.com/v1/images/"
  
  const fetchCatData = async () => {
    const id = breedIds[Math.floor(Math.random() * breedIds.length)]
    const response = await fetch(`${URL}${id}`);
    const data = await response.json();
    const catId = data[0].id;

    const breedResponse = await fetch(`${catInfoURL}${catId}`);
    const breedData = await breedResponse.json();

    const name = breedData.breeds[0].name;
    const origin = breedData.breeds[0].origin;
    const life_span = breedData.breeds[0].life_span;
    console.log(banAttribute[origin])
    if (banAttribute[name] === true || 
        banAttribute[origin] === true || banAttribute[life_span] === true) {
      return fetchCatData();
    } else {
      setCat({
        imageUrl: data[0].url,
        name: name,
        origin: origin,
        life_span: life_span,
      });
    }
  }

  const handleBanAttribute = (attribute) => {
    setBanAttribute(prev => ({...prev, [attribute]:true}))
    console.log(banAttribute)
  }

  return (
    <>
      <div className='app'>
        <div className="main">
          <h2>Hello Cats 🐈</h2>
          <button onClick={fetchCatData}>Discover New Cat 🐱</button>
          {cat && <Cat cat={cat} onBanAttribute={handleBanAttribute} />}
        </div>
        <div className="sidebar">
          <BanList banList={ banAttribute } />
        </div>
      </div>
    </>
  )
}

export default App
