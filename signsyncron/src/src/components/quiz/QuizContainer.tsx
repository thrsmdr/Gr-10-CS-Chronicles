import { useMemo, useState } from "react";
import { DictionaryData } from "../../../data/DictionaryData";
import { QuizData } from "../../../data/QuizData";
import { colors } from "../../../theme";
import ActualQuizUI from "./ActualQuizUI";
import { LESSON_TIPS } from "../../../data/QuizData";

export const IntroScreen = ({ phaseId, onStart }: { phaseId: string, onStart: () => void }) => {
    const [showTip, setShowTip] = useState(true);
    const studySet = DictionaryData.filter(word => word.phaseId === phaseId);

    const currentTip = LESSON_TIPS[phaseId];

    return (
        <div style={{ textAlign: 'center', padding: '40px' }}>
            {currentTip && showTip && (
                <div style={tipNoteWrapperStyle}>
                    <p 
                        style={{ margin: 0, flex: 1, whiteSpace: 'pre-line' }} 
                        dangerouslySetInnerHTML={{ __html: currentTip }} 
                    />
                    <button 
                        onClick={() => setShowTip(false)} 
                        style={closeButtonStyle}
                    >
                        ✕
                    </button>
                </div>
            )}

            {currentTip && !showTip && (
                <button 
                    onClick={() => setShowTip(true)} 
                    style={reopenButtonStyle}
                    title="Show Lesson Tip"
                >
                    💡 Show Tip
                </button>
            )}

            <h1 style={{ color: colors.QuizPrimary }}>Get Ready!</h1>
            <h2 style={{ color: colors.QuizIncorrect }}>Highly suggested to complete all the lessons before this one for best understanding.</h2>
            <p style={{ color: colors.QuizSecondary }}>Study these signs before the quiz starts. You may also try signing them yourself:</p>
            
            <div style={gridStyle}>
                {studySet.length > 0 ? studySet.map(item => (
                    <div key={item.id} style={introCardStyle}>
                        <video src={item.videoUrl} autoPlay loop muted style={{ width: '150px' }} />
                        <h2 style={{ color: colors.MainTextPrimary }}>{item.signWord}</h2>
                        <p dangerouslySetInnerHTML={{ __html: item.notes }} style={{ fontSize: '0.9rem' }} />
                    </div>
                )) : <p style={{ color: colors.QuizIncorrect }}>No study words found for {phaseId}</p>}
            </div>

            <button onClick={onStart} style={startButtonStyle}>Start Quiz</button>
        </div>
    );
};

export const QuizContainer = ({ phaseId }: { phaseId: string }) => {

    const category = phaseId.split('-')[0].charAt(0).toUpperCase() + phaseId.split('-')[0].slice(1);
    
    const [gameState, setGameState] = useState<'intro' | 'quiz' | 'results'>('intro');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);

    const quizSessionData = useMemo(() => {
        console.log("Searching QuizData for:", phaseId); // Debugging blank screen
        const currentPhaseTasks = QuizData.filter(q => q.phaseId === phaseId);
        console.log("Tasks found:", currentPhaseTasks.length);

        return currentPhaseTasks.map((task, index) => {

        const sourceUrl = task.type === "order-words" 
            ? task.sentenceVideoUrl // manual Url for order-words
            : task.videoUrl;  // mcq and match from dictionary 

            return {
            ...task,
            id: task.id || `gen-${phaseId}-${index}`,
            videoUrl: sourceUrl, // Consolidate to one property name
            options: task.type === "mcq" 
                ? generateOptions(task.signWord || "", task.category) 
                : (task.options || []) 
        };
        }).slice(0, 5); 
    }, [category, phaseId]);

    const handleAnswer = (isCorrect: boolean) => {
        if (isCorrect) setScore(score + 1);
        
        if (currentQuestionIndex < quizSessionData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setGameState('results');
        }
    };


    if (gameState === 'intro') {
        return <IntroScreen phaseId={phaseId} onStart={() => setGameState('quiz')} />;
    }

    if (gameState === 'results') {
        return (
        <div style={resultsContainerStyle}>
            <h1 style={{ color: colors.QuizCorrect, fontSize: '2.5rem' }}>Quiz Complete!</h1>
            <p style={{ fontSize: '1.2rem', color: colors.QuizSecondary }}>
                You scored {score} out of {quizSessionData.length}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '24px', width: '100%', maxWidth: '300px' }}>
                
                {/* Secondary Actions */}
                <button 
                    onClick={() => window.location.href = "/lessons"}
                    style={startButtonStyle}
                >
                    BACK TO LESSONS
                </button>

                <button 
                    onClick={() => setGameState('intro')} 
                    style={{ ...startButtonStyle, border: 'none', color: '#888' }}
                >
                    TRY AGAIN
                </button>
            </div>
        </div>
    );
}

    const currentQuestion = quizSessionData[currentQuestionIndex];

    // If quizSessionData is empty, this prevents the blank screen
    if (!currentQuestion) {
        return (
            <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>
                <h2>Quiz Error</h2>
                <p>No questions found for phase: {phaseId}</p>
            </div>
        );
    }

    return (
        <ActualQuizUI 
            data={currentQuestion} 
            onAnswer={handleAnswer}
            onSkip={() => handleAnswer(false)}
            isLast={currentQuestionIndex === quizSessionData.length - 1}
        />
    );
};

const generateOptions = (correctWord: string, category: string): string[] => {
    const distractors = DictionaryData
        .filter(item => item.category === category && item.signWord !== correctWord)
        .map(item => item.signWord);

    const randomDistractors = distractors
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    return [...randomDistractors, correctWord].sort(() => Math.random() - 0.5);
};

// Styles
const resultsContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
    textAlign: 'center',
    padding: '20px'
};

const introCardStyle: React.CSSProperties = {
    backgroundColor: colors.MainCard,
    border: `2px solid ${colors.MainTextPrimary}`,
    borderRadius: '12px',
    padding: '15px',
    textAlign: 'center'
};

const startButtonStyle: React.CSSProperties = {
    marginTop: '30px',
    padding: '12px 30px',
    fontSize: '1.2rem',
    color: colors.MainTextPrimary,
    backgroundColor: colors.MainCard,
    border: `2px solid ${colors.MainTextPrimary}`,
    borderRadius: '8px',
    cursor: 'pointer'
};

const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    maxWidth: '800px',
    margin: '20px auto'
};

const tipNoteWrapperStyle: React.CSSProperties = {
    backgroundColor: colors.MainAction,
    borderLeft: '5px solid',
    padding: '15px 20px',
    borderRadius: '8px',
    margin: '0 auto 20px auto',
    maxWidth: '500px',
    textAlign: 'left',
    color: colors.MainActionText,
    display: 'flex', // Align text and button
    alignItems: 'flex-start',
    gap: '10px',
    position: 'relative'
};

const closeButtonStyle: React.CSSProperties = {
    background: 'none',
    border: 'none',
    color: colors.QuizIncorrect,
    fontSize: '1.2rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    padding: '0 5px',
    lineHeight: '1'
};

const reopenButtonStyle: React.CSSProperties = {
    backgroundColor: colors.MainAction,
    border: '1px solid #dcdcdc',
    color: colors.MainActionText,
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '0.85rem',
    cursor: 'pointer',
    marginBottom: '20px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    transition: 'background-color 0.2s'
};
export default QuizContainer;