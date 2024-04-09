import React, { useState } from 'react';

function Create({createCrewmate}) {
    const [name, setName] = useState('');
    const [speed, setSpeed] = useState(0);
    const [position, setPosition] = useState('');

    const handleCreate = () => {
        createCrewmate(name, speed, position);
    }

    return (
        <div>
            <h1>Create a New Crewmate</h1>
            <form>
                Name:<input value={name} onChange={(e) => {setName(e.target.value)}} type='text' placeholder='Enter crewmate name'/>
                <br /><br />
                Speed(mph):<input onChange={(e) => {setSpeed(e.target.value)}} type='text' placeholder='Enter speed in mph'/>
                <br /><br />
                <label htmlFor="position">Choose a position:</label>
                    <select onChange={(e) => {setPosition(e.target.value)}} name="position" id="position">
                        <option value="Tank">Tank</option>
                        <option value="Warrior">Warrior</option>
                        <option value="Assassin">Assassin</option>
                        <option value="Mage">Mage</option>
                        <option value="Archer">Archer</option>
                        <option value="Support">Support</option>
                    </select>
            </form>
            <br />
            <button onClick={handleCreate}>Create Crewmate</button>
        </div>
    );
}

export default Create;