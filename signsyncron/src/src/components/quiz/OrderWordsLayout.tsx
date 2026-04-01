import React, { useState } from 'react';
import { colors } from '../../../theme';

interface OrderProps {
    options: string[];
    correctAnswer: string[]; 
    onComplete: (isCorrect: boolean) => void;
}

const OrderWordsLayout = ({ options, correctAnswer, onComplete }: OrderProps) => {
    const [userAnswer, setUserAnswer] = useState<string[]>([]);

    const handlePick = (word: string) => {
        const newAnswer = [...userAnswer, word];
        setUserAnswer(newAnswer);

        if (newAnswer.length === correctAnswer.length) {
            const isCorrect = JSON.stringify(newAnswer) === JSON.stringify(correctAnswer);
            setTimeout(() => onComplete(isCorrect), 500);
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
     
            <div style={slotsContainer}>
                {correctAnswer.map((_, i) => (
                    <div key={i} style={slotStyle}>{userAnswer[i] || ""}</div>
                ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                {options.map((opt, i) => (
                    <button 
                        key={i}
                        onClick={() => handlePick(opt)}
                        disabled={userAnswer.includes(opt)} 
                        style={bubbleStyle}
                    >
                        {opt}
                    </button>
                ))}
            </div>
            
            <button onClick={() => setUserAnswer([])} style={{ marginTop: '20px', background: 'none', border: 'none', color: '#888', cursor: 'pointer' }}>
                Clear
            </button>
        </div>
    );
};

const slotStyle: React.CSSProperties = { 
    width: '50px', height: '50px', borderBottom: '3px solid #ccc', 
    margin: '0 5px', fontSize: '1.5rem', fontWeight: 'bold' 
};
const slotsContainer: React.CSSProperties = { display: 'flex', justifyContent: 'center', marginBottom: '40px', minHeight: '60px' };
const bubbleStyle: React.CSSProperties = { 
    padding: '10px 20px', borderRadius: '20px', border: '2px solid #e5e5e5', 
    background: colors.MainTextPrimary, cursor: 'pointer', fontSize: '1.2rem', color: colors.QuizPrimary 
};

export default OrderWordsLayout;