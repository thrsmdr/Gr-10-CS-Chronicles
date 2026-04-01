import { colors } from "../../../theme";
interface MCQProps {
    options: string[];
    onSelect: (isCorrect: boolean) => void;
    correctAnswer: string;
}

const MCQLayout = ({ options, onSelect, correctAnswer }: MCQProps) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px' }}>
            {options.map((option, index) => (
                <button
                    key={index}
                    onClick={() => onSelect(option === correctAnswer)}
                    style={{
                        padding: '15px',
                        borderRadius: '12px',
                        border: '2px solid #e5e5e5',
                        backgroundColor: colors.MainTextPrimary,
                        fontSize: '1.1rem',
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontWeight: '500',
                        color: colors.QuizPrimary
                    }}
                >
                    {option}
                </button>
            ))}
        </div>
    );
};

export default MCQLayout;