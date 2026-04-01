
import React from 'react';
import { colors } from '../../theme';
import { Link } from 'react-router-dom';
import type { LessonEntry } from '../../types/types';

const LessonCard: React.FC<LessonEntry> = ({ icon, title, nosigns, description, link }) => {
    return (
        <div style={LessonCardStyle}>
            {typeof icon === 'string' ? (
                <img src={icon} style={logoStyle}/>
            ) : (
                <>{React.createElement(icon, { style: logoStyle })}</>
            )}
            <h2 style={titleStyle}>{title}</h2>
            <p style={nosignsStyle}>{nosigns}</p>
            <p style={descriptionStyle}>{description}</p>
            <Link to={link} style={linkStyle}>Get Started</Link>
        </div>
    );
};

const LessonCardStyle: React.CSSProperties = {
    backgroundColor: colors.MainCard, 
    border: `2px solid ${colors.QuizPrimary}`, 
    borderRadius: '20px',
    padding: '20px',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
};

const logoStyle: React.CSSProperties = {
    width: '50px',
    height: '50px',
    color: colors.MainIcons,
    marginBottom: '12px',
};

const titleStyle: React.CSSProperties = {
    color: colors.MainTextPrimary,
    fontFamily: 'Arial, sans-serif',
    fontSize: '24px',
    fontWeight: '700',
    fontStyle: 'small-caps'
};

const nosignsStyle: React.CSSProperties = {
    color: colors.MainTextTertiary,
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    fontWeight: '500',
    fontStyle: 'italic'
};

const descriptionStyle: React.CSSProperties = {
    color: colors.MainTextSecondary,
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    fontWeight: 'normal',
};

const linkStyle: React.CSSProperties = {
    color: colors.MainActionText,
    textDecoration: 'none',
    backgroundColor: colors.MainAction,
    padding: '10px 15px',
    borderRadius: '8px',
    display: 'inline-block',
    marginTop: '10px',
};

export default LessonCard;

// redo the ui for all the styles. show ur ui sketch. also, buttons??