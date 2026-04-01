import { colors, pageContainerStyle, titleStyle } from "../theme";
import { LessonData } from "../data/LessonData";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
    
const PhaseMenuPage = () => {
    const { categoryName } = useParams();
    const lesson = LessonData.find(l => l.category === categoryName);
    
    if (!lesson) return <div>Lesson not found</div>;

    const phases = Array.from({ length: lesson.totalPhases }, (_, i) => i + 1);

    return (
        <div style={pageContainerStyle}>
            <h1 style={titleStyle}>{categoryName} Phases</h1>
            <div style={phaseListStyle}>
                {phases.map(p => {
                    // Create the string ID: "alphabet-1", "greetings-2", etc.
                    const phaseId = `${categoryName?.toLowerCase()}-${p}`;
                    return (
                        <Link 
                            key={p} 
                            to={`/quiz/${categoryName}/${phaseId}`}
                            style={phaseLinkStyle} // Add some padding/background to see it!
                        >
                            Phase {p}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

const phaseLinkStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    background: colors.MainAction,
    color: colors.MainActionText,
    borderRadius: '15px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.2rem'
};

const phaseListStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '30px',
    maxWidth: '800px',
    width: '100%',
    padding: '20px',
    margin: '0 auto',
    boxSizing: 'border-box' 
};

export default PhaseMenuPage;
