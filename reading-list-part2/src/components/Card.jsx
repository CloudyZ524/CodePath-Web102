import React from 'react';

function Card({year, edition, count}) {
    return (
        <div className='card'>
            <div className='card1'>
                <h4>Earliest Publish Year</h4>
                <p>{year}</p>
            </div>
            <div className='card2'>
                <h4>Most Edition</h4>
                <p>{edition}</p>
            </div>
            <div className='card3'>
                <h4>Reading Count</h4>
                <p>{count}</p>
            </div>   
        </div>
    );
}

export default Card;