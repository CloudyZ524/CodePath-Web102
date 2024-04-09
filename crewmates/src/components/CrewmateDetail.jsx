import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function CrewmateDetail({updateCrewmate, deleteCrewmate, crewmates}) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [crewmate, setCrewmate] = useState(null);
    const [newName, setNewName] = useState('');
    const [newSpeed, setNewSpeed] = useState('');
    const [newPosition, setNewPosition] = useState('');

    useEffect(() => {
        const crew = crewmates.find((c) => c.id.toString() === id);
        if (crew) {
            setCrewmate(crew);
            setNewName(crew.name);
            setNewSpeed(crew.speed);
            setNewPosition(crew.position);
        }
    }, [id, crewmates]);
    
    const handleUpdate = () => {
        updateCrewmate(parseInt(id, 10), newName, newSpeed, newPosition);
        navigate(`/update/${id}`);
    }

    const handleDelete = () => {
        deleteCrewmate(parseInt(id, 10));
        navigate('/delete');
    }

    if (!crewmate) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Crewmate Detail</h1>
            <div className='crewCard'>
                <h3>Name: {crewmate.name}</h3>
                <p>Speed: {crewmate.speed} mph</p>
                <p>Position: {crewmate.position}</p>
            </div>
            Update Name: <input value={newName} onChange={(e) => {setNewName(e.target.value)}} placeholder='Update Name'></input>
            <br /><br />
            Update Speed: <input value={newSpeed} onChange={(e) => {setNewSpeed(e.target.value)}} placeholder='Update Speed'></input>
            <br /><br />
            Update Position: <input value={newPosition} onChange={(e) => {setNewPosition(e.target.value)}} placeholder='Update Position'></input>
            <br /><br />
            <button onClick={handleUpdate}>Update Crewmate</button>
            <button onClick={handleDelete}>Delete Crewmate</button>
        </div>
    );
}

export default CrewmateDetail;