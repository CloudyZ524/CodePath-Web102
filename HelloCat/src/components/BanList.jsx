
const BanList = ({ banList }) => {
    // convert object keys to array
    const bannedItems = Object.keys(banList);

    return (
        <div>
            <h3>Ban List</h3>
            <p>Select an attribute in your list to ban it</p>
            <div>
                {bannedItems.map(item => (
                    <button key={item} className="ban-button">{item}</button>
                ))}
            </div>
        </div>
    );
}

export default BanList;