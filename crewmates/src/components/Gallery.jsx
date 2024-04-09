import React from 'react';
import { Link } from 'react-router-dom';

function Gallery({crewmates}) {
    return (
        <div>
            <h1>Your Crewmate Gallery!</h1>
            {crewmates.map((crew, i) => (
                <div className='crewCard' key={i}>
                    <h3>Name: {crew.name}</h3>
                    <p>Speed: {crew.speed} mph</p>
                    <p>Position: {crew.position}</p>
                    <Link to={`/crewmate/${crew.id}`}><button>Edit Crewmate</button></Link>
                </div>
            ))}
        </div>
    );
}

export default Gallery;