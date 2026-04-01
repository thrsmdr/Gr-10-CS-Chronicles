import React, { useState, useEffect } from 'react';
import { colors } from '../../../theme';

interface MatchingProps {
    data: any[]; // The QuizContainer passes matchData (array of 4 dictionary objects)
    onComplete: (isCorrect: boolean) => void;
}

const MatchingLayout = ({ data, onComplete }: MatchingProps) => {
    const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
    const [selectedWordId, setSelectedWordId] = useState<string | null>(null);
    const [matches, setMatches] = useState<string[]>([]);

    const [shuffledVideos, setShuffledVideos] = useState<any[]>([]);
    const [shuffledWords, setShuffledWords] = useState<any[]>([]);

    useEffect(() => {
        // 'data' is the array of 4 words for this phase
        setShuffledVideos([...data].sort(() => Math.random() - 0.5));
        setShuffledWords([...data].sort(() => Math.random() - 0.5));
    }, [data]);

    useEffect(() => {
        if (selectedVideoId && selectedWordId) {
            if (selectedVideoId === selectedWordId) {
                setMatches(prev => [...prev, selectedVideoId]);
            }
            // Small delay before resetting selection so user sees the "click"
            setTimeout(() => {
                setSelectedVideoId(null);
                setSelectedWordId(null);
            }, 200);
        }
    }, [selectedVideoId, selectedWordId]);

    useEffect(() => {
    // CHANGE: Compare to data.length instead of a hardcoded 4
    if (data.length > 0 && matches.length === data.length) {
        setTimeout(() => onComplete(true), 800);
    }
}, [matches, data, onComplete]);

    return (
        <div style={containerStyle}>
            <div style={columnStyle}>
                {shuffledVideos.map(item => (
                    <button 
                        key={`vid-${item.id}`}
                        disabled={matches.includes(item.id)}
                        onClick={() => setSelectedVideoId(item.id)}
                        style={{
                            ...cardStyle,
                            opacity: matches.includes(item.id) ? 0.2 : 1,
                            borderColor: selectedVideoId === item.id ? colors.MainTextPrimary : '#ccc',
                            borderWidth: '3px'
                        }}
                    >
                        <video src={item.videoUrl} autoPlay loop muted style={{ width: '100%', maxWidth: '150px', borderRadius: '8px' }} />
                    </button>
                ))}
            </div>

                        <div style={columnStyle}>
                            {shuffledWords.map(item => (
                        <button 
                            key={`word-${item.id}`}
                        disabled={matches.includes(item.id)}
                        onClick={() => setSelectedWordId(item.id)}
                        style={{
                            ...cardStyle,
                            opacity: matches.includes(item.id) ? 0.2 : 1,
                            backgroundColor: selectedWordId === item.id ? colors.QuizIncorrect : colors.MainTextPrimary ,
                            color: selectedWordId === item.id ? colors.QuizPrimary : colors.QuizPrimary,
                            minWidth: '100px',
                            height: '80px',
                            fontWeight: 'bold'
                        }}
                    >
                        {item.signWord}
                    </button>
                ))}
            </div>
        </div>
    );
};


const containerStyle: React.CSSProperties = { 
    display: 'grid',
    // Desktop: 2 equal columns | Mobile: 1 column
    gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
    gap: '30px',
    padding: '20px',
    width: '100%',
    maxWidth: '800px', // Prevents it from spreading too far on desktop
    margin: '0 auto',
    boxSizing: 'border-box',
    justifyContent: 'center',
    alignContent: 'center'
};
const columnStyle: React.CSSProperties = { 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '12px',
    width: '100%' 
};

const cardStyle: React.CSSProperties = { 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    padding: '8px', 
    border: '2px solid #ccc', 
    borderRadius: '16px', 
    cursor: 'pointer', 
    transition: 'all 0.1s', 
    background: '#fff',
    width: '100%', // Take up full column width
    boxSizing: 'border-box',
};

export default MatchingLayout;
