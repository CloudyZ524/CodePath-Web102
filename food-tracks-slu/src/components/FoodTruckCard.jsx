
const FoodTruckCard = ({ name, cuisine, imageUrl }) => {
    return (
        <div className="card">
            <img src={imageUrl} alt={name} />
            <h3>{name}</h3>
            <p>{cuisine}</p>
            <button>View Menu</button>
        </div>
    );
};

export default FoodTruckCard;
