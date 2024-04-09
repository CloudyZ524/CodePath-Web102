import React from 'react';
import { useParams } from 'react-router-dom';

function Update({crewmates}) {
    const { id } = useParams();
    const crew = crewmates.find((c) => c.id.toString() === id);

    return (
        <div>
            <h1>Crewmate {crew.name} has been updated! 🚀</h1>
        </div>
    );
}

export default Update;