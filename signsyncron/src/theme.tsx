export const colors = {
  MainIcons: '#10B981',
  MainBackground: '#F8FAFC',
  MainTextPrimary: '#20ba99',
  MainTextSecondary: '#475569',
  MainTextTertiary: '#94A3B8',
  MainCard: '#rgba(255, 255, 255, 0.8)',
  MainAction: '#6366F1',
  MainActionText: '#FFFFFF',
  QuizPrimary: '#E2E8F0',
  QuizSecondary: '#CBD5E1',
  QuizBackground: '#0F172A',
  QuizCorrect: '#1ede9e',
  QuizIncorrect: '#E7727F',
};

export const pageContainerStyle: React.CSSProperties = {
    backgroundColor: colors.MainBackground,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100vw', 
    margin: 0,
    padding: '60px',
    boxSizing: 'border-box',
    overflowX: 'hidden', 
};

export const titleStyle: React.CSSProperties = {
    color: colors.MainTextPrimary,
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '32px',
    textAlign: 'center',
    padding: '20px'
};

export const paragraphStyle: React.CSSProperties = {
    color: colors.MainTextSecondary,
    fontSize: '1.125rem',
    lineHeight: '1.6',
    marginBottom: '16px',
    textAlign: 'left', 
    padding: '0 16px', 
    whiteSpace: 'pre-wrap'
};

export const sectiontitlestyle: React.CSSProperties = {
    color: colors.MainTextSecondary,
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '16px',
    marginTop: '32px',
    padding: '20px'
};

export const additionalInfoStyle: React.CSSProperties = {
    color: colors.MainTextTertiary,
    fontSize: '0.875rem',
    lineHeight: '1.4',
    marginTop: '8px',
    textAlign: 'left', 
    padding: '0 60px', 
    whiteSpace: 'pre-wrap'
};
