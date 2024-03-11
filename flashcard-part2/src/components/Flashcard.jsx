import { useState } from 'react';

function Flashcard({ card }) {

    const [isFliped, setIsFliped] = useState(false);

    const flipCard = () => {
        setIsFliped(!isFliped);
    }

    return (
        <div>
            <div className='flashCard' onClick={flipCard}>
                {isFliped ? <h1>{card.answer}</h1> : <img className="cardPic" src={card.question} alt="Question" />}
            </div>
        </div>
    );
}

export default Flashcard;