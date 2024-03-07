import React, { useState } from 'react';
import Flashcard from './Flashcard';

function FlashcardHandler() {
    const cards = [
        { question: "https://www.bhg.com/thmb/mE-LNUHyjIGobYSFm2V1pHw951k=/4000x0/filters:no_upscale():strip_icc()/Tteokbokki-Spicy-Rice-Cakes-Hero-6979305-6846a52bb31b4d928d40e7a5cdf4ea23.jpg", answer: '떡볶이' },
        { question: "https://christieathome.com/wp-content/uploads/2020/03/Jajangmyeon-6.jpg", answer: '짜장면' },
        { question: "https://foodyap.co.kr/shopimages/goldplate1/039000000012.jpg?1560850364", answer: '부대찌개' },
        { question: "https://banchan365.com/cdn/shop/products/main_0dd25757-7181-4c34-9801-4ad3ee6c1303.jpg?v=1697313239", answer: '순두부찌개' },
        { question: "https://newsimg.sedaily.com/2023/07/17/29S608LYZE_3.jpg", answer: '삼계탕' },
    ]

    const [index, setIndex] = useState(0);

    const handleIndex = () => {
        const randomIndex = Math.floor(Math.random() * cards.length);
        setIndex(randomIndex);
    };

    return (
        <div className='FlashcardHandler'>
            <h2>What is this in Korean🇰🇷</h2>
            <p>Test your vocabulary on Korean Food!</p>
            <p>Number of cards: {cards.length} </p>
            <Flashcard card={ cards[index] }/>
            <button onClick={ handleIndex }>➡️</button>
        </div>
    )
}

export default FlashcardHandler;