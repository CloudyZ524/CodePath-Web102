import FoodTruckCard from './components/FoodTruckCard.jsx'
import './components/FoodTruckCard.css';
import './App.css'

function App() {
  const foodTrucks = [
    {name: 'Impeckable Chicken 🍔', cuisine: 'American', imageUrl: 'https://s3-media0.fl.yelpcdn.com/bphoto/2J4nOYzoclDVYHwggH222g/348s.jpg'}, 
    {name: 'Spice on Curve', cuisine: 'Indian', imageUrl: 'https://cdn.geekwire.com/wp-content/uploads/2023/02/indiantruck-630x469.jpeg'}, 
    {name: 'Banana Stand 🍌', cuisine: 'Fruit', imageUrl: 'https://seattlevegan.com/wp-content/uploads/go-bananas-in-south-lake-union.jpg'}, 
    {name: 'Tacos El Tajin 🌮️', cuisine: 'Mexican', imageUrl: 'https://cdn.geekwire.com/wp-content/uploads/2023/02/tacotruck-1260x981.jpeg'}, 
    {name: 'Yumbit 🍱', cuisine: 'Chinese', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQPnpOic733GIP9ugMPtoPyrwbF-XzNqxWktdFvsXRw8LQf39yEoz9y7uxJFVzh6Gmdqg&usqp=CAU'}, 
    {name: 'Midnight Ramen 🍜', cuisine: 'Japanese', imageUrl: 'https://s3-media0.fl.yelpcdn.com/bphoto/kveGnpgVBG6p0nnlIoMNLg/348s.jpg'}, 
    {name: 'Tuk Tuk', cuisine: 'Laotian', imageUrl: 'https://i.ytimg.com/vi/MZ0pDhyD4bo/maxresdefault.jpg'}, 
    {name: 'Kaosamai', cuisine: 'Thai', imageUrl: 'https://s3-media0.fl.yelpcdn.com/bphoto/MUxisQVEKrV13H88d3SGSg/348s.jpg'}, 
    {name: 'Taco Chukis', cuisine: 'Mexican', imageUrl: 'https://s3-media0.fl.yelpcdn.com/bphoto/xKUYOTr742AyiKYmaRXEoA/258s.jpg'}, 
    {name: 'Westlake Food Truck Pod', cuisine: 'American', imageUrl: 'https://s3-media0.fl.yelpcdn.com/bphoto/wlvIw9soiElY3l8xFlaw3g/l.jpg'}, 
  ];

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Food Truck in South Lake Union</h1>
      </header>
      <div className='card-container'>
        {foodTrucks.map(truck => (
          <FoodTruckCard
            key={truck.name}
            name={truck.name}
            cuisine={truck.cuisine}
            imageUrl={truck.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
