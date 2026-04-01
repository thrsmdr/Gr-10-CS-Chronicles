import { Link } from 'react-router-dom';
import { colors } from '../../theme';
import type { ArticleCardEntry } from '../../types/types';


const ArticleCard: React.FC<ArticleCardEntry> = ({ id, title, description }) => {
    return (
        <div style={cardStyle}>
            <h2 style={titleStyle}>{title}</h2>
            <p style={descriptionStyle}>{description}</p>
            <Link to={`/article/${id}`} style={linkStyle}>
                Read Full Article !
            </Link>
        </div>
    
    );
}

const cardStyle: React.CSSProperties = {
  backgroundColor: '#ffffff',
  borderRadius: '16px',
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between', // Keeps the button at the bottom
  alignItems: 'flex-start',
  height: '220px', // Uniform height for all cards
  border: '1px solid #e0e0e0',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
  cursor: 'pointer',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  textAlign: 'left',
};
    
const titleStyle: React.CSSProperties = {
    color: colors.MainTextPrimary,
    fontFamily: 'Arial, sans-serif',
    fontSize: '24px',
    fontWeight: '700',
    fontStyle: 'small-caps',
    marginBottom: '8px',
};

const descriptionStyle: React.CSSProperties = {
    color: colors.MainTextSecondary,
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    fontWeight: 'normal',
    textAlign: 'center',
    marginBottom: '16px',
};

const linkStyle: React.CSSProperties = {
    color: colors.MainAction,
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    fontWeight: '600',
    textDecoration: 'none',
    alignSelf: 'flex-end', // Aligns the link to the bottom right
};

export default ArticleCard;
