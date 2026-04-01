import React, { useState } from 'react';
import VideoPlaceholder from "../VideoPlaceholder";
import MCQLayout from "./MCQLayout";
import MatchingLayout from "./MatchingLayout";
import OrderWordsLayout from "./OrderWordsLayout";
import type { ActualQuizProps } from '../../../types/types';
import { colors } from "../../../theme";

const ActualQuizUI = ({ data, onAnswer, onSkip }: ActualQuizProps) => {

    const [selection, setSelection] = useState<any>(null);
    const [hasChecked, setHasChecked] = useState(false);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const handleSelection = (isAnswerCorrect: boolean) => {
        setSelection(true); 
        setIsCorrect(isAnswerCorrect);
    };

    const handleCheck = () => {
        setHasChecked(true);
    };

    const handleContinue = () => {
        onAnswer(isCorrect ?? false);
        // Reset local state for the next question
        setHasChecked(false);
        setSelection(null);
        setIsCorrect(null);
    };

    const interactionColumnStyle: React.CSSProperties = {
    flex: 1,
    width: '100%',
    maxWidth: data.type === 'match' ? '900px' : '450px', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '0 auto' 
    };

    return (
        <div className="quiz-container" style={{
            ...responsiveGridStyle,
            gridTemplateColumns: data.type === 'match' 
                ? '1fr' 
                : (window.innerWidth > 850 ? '1.2fr 1fr' : '1fr'),
            justifyItems: 'center' 
        }}>
            
            {data.type !== 'match' && data.videoUrl && data.videoUrl !== ".." && (
                <div style={mediaColumnStyle}>
                    <VideoPlaceholder 
                    key={data.id}
                    videoUrl={data.videoUrl} />
                </div>
            )}

            {/* 2. Layout Switcher */}
            <div style={interactionColumnStyle}>
                {data.type === "mcq" && (
                    <MCQLayout 
                        key={data.id}
                        options={data.options} 
                        correctAnswer={data.signWord || ""}
                        onSelect={handleSelection} 
                    />
                )}
                {data.type === "order-words" && (
                    <OrderWordsLayout 
                        key={data.id}
                        options={data.options}
                        correctAnswer={data.correctAnswer as string[]}
                        onComplete={handleSelection}
                    />
                )}
                {data.type === "match" && (
                    <MatchingLayout 
                        key={data.id}
                        data={data.matchData || []} 
                        onComplete={handleSelection} 
                    />
                )}
            </div>

            <div style={footerStyle}>
                {!hasChecked ? (
                    <>
                        <button onClick={onSkip} style={skipButtonStyle}>Skip</button>
                        <button 
                            onClick={handleCheck} 
                            disabled={!selection} 
                            style={{...checkButtonStyle, opacity: selection ? 1 : 0.5}}
                        >
                            Check
                        </button>
                    </>
                ) : (
                    <div style={{...feedbackBarStyle, backgroundColor: isCorrect ? '#d7ffb8' : '#ffdfe0'}}>
                        <span style={{fontWeight: 'bold', color: colors.QuizCorrect ? colors.QuizCorrect : colors.QuizIncorrect}}>
                            {isCorrect ? "Nice one ;)" : "Keep practicing, you can do it ! ^^"}
                        </span>
                        <button onClick={handleContinue} style={continueButtonStyle}>
                            Continue
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

// --- Styles ---
const footerStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: 0,
    left: 0, // Pin to left
    right: 0, // Pin to right
    width: '100%', // Take up all space
    padding: '20px 40px',
    borderTop: '2px solid #333',
    backgroundColor: '#121212',
    display: 'flex',
    justifyContent: 'space-between',
    boxSizing: 'border-box', // Crucial: includes padding in the width calculation
};

const checkButtonStyle: React.CSSProperties = {
    padding: '12px 40px',
    backgroundColor: colors.MainAction,
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '1rem',
    boxShadow: '0 4px 0 '
};

const feedbackBarStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '20px',
    borderRadius: '12px'
};

const continueButtonStyle: React.CSSProperties = {
    padding: '12px 30px',
    backgroundColor: colors.MainAction,
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    fontWeight: 'bold',
    cursor: 'pointer'
};

const skipButtonStyle: React.CSSProperties = {
    background: 'none',
    border: '2px solid #e5e5e5',
    color: colors.QuizIncorrect,
    padding: '10px 20px',
    borderRadius: '12px',
    fontWeight: 'bold',
    cursor: 'pointer'
};
const responsiveGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr', // Desktop: 2 cols, Mobile: 1 col
    gap: '40px',
    alignItems: 'center',
    width: '100%',
    padding: '20px 0',
};

const mediaColumnStyle: React.CSSProperties = {
    flex: 1,
    width: '100%',
    maxWidth: '600px', // Prevents the video from getting too giant
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
};


export default ActualQuizUI;


//wait so will the layouts be connected to the quiz data by question type
//why is the text not visible for mcq and why no text for matching.