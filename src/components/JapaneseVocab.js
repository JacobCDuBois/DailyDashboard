import React, { useState, useEffect } from 'react';
// import './CardWithReset.css'; // You can create a CSS file for styling
import cardData from './vocab.json'; // Import the JSON file
import '../vocabCard.css'
const JapaneseVocab = () => {
    const [currentIndex, setCurrentIndex] = useState([0,true]);

    const getRandomIndex = () => {
        return Math.floor(Math.random() * cardData.length);
    };

    const handleReset = (e) => {
        e.stopPropagation()
        const newIndex = getRandomIndex();
        setCurrentIndex([newIndex, true]);
    };

    const handleCardClick = () => {
        console.log(currentIndex)
        setCurrentIndex([currentIndex[0], !currentIndex[1]])
    }

    useEffect(() => {
        // Set a random index when the component mounts
        const newIndex = getRandomIndex();
        setCurrentIndex([newIndex, true]);
    }, []);

    const currentCard = cardData[currentIndex[0]];

    if(currentIndex[1]){
        return (
            <div className="card" onClick={handleCardClick} >
                <div className="card-inner">
                    <div className="card-front" >
                        <h2>{currentCard.hiragana}</h2>
                        <p>{currentCard.kanji}</p>
                        <button onClick={handleReset}>Reset Front</button>
                    </div>
                </div>
            </div>
        );
    }
    else{
        return (
            <div className="card" onClick={handleCardClick}>
                <div className="card-inner">
                    <div className="card-back">
                        <h2>{currentCard.english}</h2>
                        <button onClick={handleReset}>Reset Back</button>
                    </div>
                </div>
            </div>
        );
    }


};

export default JapaneseVocab;
