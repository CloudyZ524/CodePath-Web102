const Cat = ({cat, onBanAttribute }) => {
    if (!cat) return null;

    const handleBanClick = (attribute) => {
        onBanAttribute(attribute);
    }

    return (
        <div className="cat-display">
            <h2>{cat.name}</h2>
            <img className="img" src={cat.imageUrl} alt={`A picture of ${cat.name}`} />
            <div className="attributes">
                <button onClick={() => handleBanClick(cat.name)}>{cat.name}</button>
                <button onClick={() => handleBanClick(cat.origin)}>{cat.origin}</button>
                <button onClick={() => handleBanClick(cat.life_span)}>{cat.life_span} years</button>
            </div>        
        </div>
    );
};

export default Cat;