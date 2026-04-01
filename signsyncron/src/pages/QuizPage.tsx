import { useParams } from "react-router-dom";
import QuizContainer from "../src/components/quiz/QuizContainer";

const QuizPage = () => {
    const { phaseId } = useParams<{ categoryName: string, phaseId: string }>();

    // Remove the parseInt! We want the string "alphabet-1"
    return (
        <div style={mainPageStyle}>
           <QuizContainer 
            phaseId={phaseId || ""} 
            />
        </div>
    );
};

const mainPageStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100vw', 
    marginBottom: '70px',
    padding: '20px',
    boxSizing: 'border-box',
    alignItems: 'center', // Centers everything horizontally
    justifyContent: 'center', // Centers everything vertically
    overflowX: 'hidden', // Prevent accidental horizontal scrolling
    backgroundColor: '#121212', 
};

export default QuizPage;