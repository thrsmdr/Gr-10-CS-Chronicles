import { colors } from '../../theme';
import React from 'react';
import type { DictionaryEntry } from '../../types/types';


const DictionaryCard: React.FC<DictionaryEntry> = ({ signWord: word, videoUrl, notes }) => {
    return (
        <div style={DictionaryCardStyle}>
            <div style={videoContainerStyle}>
                {videoUrl ? (
                    <video 
                        key={videoUrl} 
                        src={videoUrl} 
                        controls 
                        loop 
                        muted 
                        playsInline 
                        style={{
                            ...videoStyle,
                            cursor: 'pointer',
                            backgroundColor: '#000' // Black background looks cleaner for paused videos
                        }}
                    />
                
                ) : (
                    <div style={{...videoStyle, background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span>Video Coming Soon</span>
                    </div>
                )}
            </div>
            <div style={textContainerStyle}>
                <h2 style={wordStyle}>{word}</h2>
                <p style={{ textAlign: 'left', padding: '0 16px', whiteSpace: 'pre-wrap' }}
                   dangerouslySetInnerHTML={{ __html: notes }}></p>
            </div>
        </div>
    );
};

const DictionaryCardStyle: React.CSSProperties = {
    backgroundColor: colors.MainCard,
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '16px',
    margin: '8px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
};

const wordStyle: React.CSSProperties = {
    color: colors.MainTextPrimary,
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '8px',
    flex: '1',
    textAlign: 'left',
};

const videoContainerStyle: React.CSSProperties = {
    width: '100%', 
    maxWidth: '600px', // Much larger "Hero" size for better visibility
    aspectRatio: '16 / 9', // Standard video ratio
    borderRadius: '24px', // Softer, more modern corners
    overflow: 'hidden',
    backgroundColor: '#000', // Black background looks better for video letterboxing
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto', // Centers it if the parent is wide
    };
                        
const videoStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    };


const textContainerStyle: React.CSSProperties = {
    color: colors.MainTextSecondary,
    fontSize: '16px',
    flex: '2',
};

export default DictionaryCard;

//How to make it more rectagular but vertical shape.