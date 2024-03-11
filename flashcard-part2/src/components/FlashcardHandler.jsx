import { useState } from 'react';
import Flashcard from './Flashcard';

function FlashcardHandler() {
    const cards = [
        { question: "https://www.bhg.com/thmb/mE-LNUHyjIGobYSFm2V1pHw951k=/4000x0/filters:no_upscale():strip_icc()/Tteokbokki-Spicy-Rice-Cakes-Hero-6979305-6846a52bb31b4d928d40e7a5cdf4ea23.jpg", answer: '떡볶이' },
        { question: "https://christieathome.com/wp-content/uploads/2020/03/Jajangmyeon-6.jpg", answer: '짜장면' },
        { question: "https://foodyap.co.kr/shopimages/goldplate1/039000000012.jpg?1560850364", answer: '부대찌개' },
        { question: "https://banchan365.com/cdn/shop/products/main_0dd25757-7181-4c34-9801-4ad3ee6c1303.jpg?v=1697313239", answer: '순두부찌개' },
        { question: "https://newsimg.sedaily.com/2023/07/17/29S608LYZE_3.jpg", answer: '삼계탕' },
        { question: "https://data.0app0.com/diet/shop/goods/20230728/20230728185531_7569076621.jpg?resize=500", answer: '갈비' },
        { question: "https://www.pulmuone-lohas.com/upload/webimage/201806/20180621OP7h_.jpg", answer: '잡채' },
        { question: "https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Korean-Fried-Chicken-square-FS-New-7377.jpg", answer: '치킨' },
        { question: "https://i.namu.wiki/i/3u7KQ8jVXWJMJpioMNBo5bFb7NrMd1jUbJrGXy99vSgh57D2w0BHG3RlEnawqyRlfAuTihp37sPnlCKX3IlKNg.webp", answer: '김치' },
    ]

    const [index, setIndex] = useState(0);
    const [userGuess, setUserGuess] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);
    const [currentStreak, setCurrentStreak] = useState(0);
    const [longestStreak, setLongestStreak] = useState(0);

    const handleIndex = () => {
        const randomIndex = Math.floor(Math.random() * cards.length);
        setIndex(randomIndex);
        setUserGuess('');
        setIsCorrect(null);
    };

    const ForwardIndex = () => {
        const i = (index + 1) % cards.length;
        setIndex(i);
        setUserGuess('');
        setIsCorrect(null);
    };

    const BackwardIndex = () => {
        const i = (index - 1 + cards.length) % cards.length;
        setIndex(i);
        setUserGuess('');
        setIsCorrect(null);
    };

    const handleGuess = (event) => {
        event.preventDefault();
        const result = userGuess.trim() === cards[index].answer;
        setIsCorrect(result);

        if (result) {
            const newStreak = currentStreak + 1;
            setCurrentStreak(newStreak);
            if (newStreak > longestStreak) {
                setLongestStreak(newStreak);
            }
        } else {
            setCurrentStreak(0);
        }
    }

    return (
        <div className='FlashcardHandler'>
            <h2>What is this in Korean🇰🇷</h2>
            <p>Test your vocabulary on Korean Food!</p>
            <p>Number of cards: {cards.length} </p>
            <p>Current Streak: {currentStreak}, Longest Streak: {longestStreak}</p>
            <Flashcard card={ cards[index] }/>
            <form onSubmit={handleGuess}>
                <label htmlFor='guess'>Guess the answer here: </label>
                <input 
                    value={userGuess}
                    onChange={(e) => setUserGuess(e.target.value)}
                    type="text" 
                    name='answer'
                    id='guess-answer' 
                    placeholder='Place your answer here'
                />
                <button type='submit'>Submit Guess</button>  
            </form>
            {/* In-line condition for result of guess, && - evaluation condition */}
            {isCorrect !== null && (
                <div>
                    {isCorrect ? 'Correct!😊' : 'Incorrect 🤔️'}
                </div>
            )}
            <div className='buttonContainer'>
                <button onClick={ BackwardIndex }>⬅️</button>
                <button onClick={ ForwardIndex }>➡️</button>
                <button onClick={ handleIndex }>Shuffle Cards</button>
            </div>
        </div>
    )
}

export default FlashcardHandler;