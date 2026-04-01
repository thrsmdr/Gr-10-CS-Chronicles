import { useParams } from 'react-router-dom';
import { AllArticles } from '../data/ArticleData';
import { pageContainerStyle } from '../theme';
import { colors } from '../theme';

const ArticlePage = () => {
    const { id } = useParams();
    const article = AllArticles.find((a) => a.id === id);

    if (!article) return <div style={pageContainerStyle}>Article not found!</div>;

    return (
        <div style={pageContainerStyle}>
            <h1 style={{ color: '#333', marginBottom: '20px' }}>{article.title}</h1>
            <h2 style={{ color: colors.MainTextSecondary, marginBottom: '40px' }}>{article.text}</h2>
            
            {article.sections.map((section, index) => (
                <div key={index} style={{ marginBottom: '40px', textAlign: 'left' }}>
                    <h2 style={{ color: colors.MainTextPrimary, borderBottom: '2px solid #eee' }}>
                        {section.sectionTitle}
                    </h2>
                    <p style={bodyTextStyle}
                        dangerouslySetInnerHTML={{ __html: section.text ?? ""}}>
                    </p>
                    {section.list && (
                        <ul style={{ paddingLeft: '25px', margin: '15px 0', color: colors.MainTextSecondary }}>
                            {section.list.map((item, i) => (
                                <li key={i} style={{ marginBottom: '10px' }}>{item}</li>
                            ))}
                        </ul>
                    )}

                    {section.examples?.map((ex, i) => (
                        <div key={i} style={exampleBoxStyle}>
                        <span style={englishLabelStyle}>English: "{ex.english}"</span>
                        <div style={aslTextStyle}>
                            ASL: <span>{ex.asl}</span>
                        </div>
                        {ex.note && (
                            <p style={{ color: colors.MainTextTertiary, fontSize: '0.85rem', marginTop: '8px' }}>
                                {ex.note}
                            </p>
                        )}
                    </div>
                ))}

                    {section.points?.map((point, i) => (
                        <div key={i} style={pointStyle}>
                            <strong style={{ color: colors.MainTextPrimary }}>{point.description}:</strong>
                            {point.videoUrl && <video src={point.videoUrl} controls muted style={{ width: '100%', marginTop: '10px' }} />}
                        </div>
                    ))}
                     <p style={{ lineHeight: '1.6', fontSize: '1.1rem', color: colors.MainTextSecondary }}>
                        {section.additionalInfo}
                    </p>
                    {section.sources && (
            <div style={{ marginTop: '10px', fontSize: '0.85rem' }}>
                <span style={{ color: colors.MainTextTertiary }}>Sources and Credits!: </span>
                {section.sources.map((src, i) => (
                    <a key={i} href={src} target="_blank" rel="noreferrer" style={{ marginRight: '10px', color: colors.MainAction }}>
                        [Source {i + 1}]
                    </a>
                ))}
            </div>
        )}
    </div>
            ))}
        </div>
    );
};


const pointStyle = { padding: '10px 0', borderBottom: '1px dashed #ddd' };

const bodyTextStyle: React.CSSProperties = {   
    color: colors.MainTextSecondary, 
    lineHeight: '1.7',
    fontSize: '1.1rem',
    marginBottom: '16px',
    textAlign: 'left',
    whiteSpace: 'pre-line'
};

const exampleBoxStyle: React.CSSProperties = { 
    background: '#f0fdfa', 
    borderLeft: `4px solid ${colors.MainTextPrimary}`, // Uses your #20ba99 green
    padding: '20px', 
    margin: '20px 0',
    borderRadius: '0 8px 8px 0'
};

const englishLabelStyle: React.CSSProperties = {
    color: colors.MainTextSecondary, // Fixes the "invisible" white text issue
    fontSize: '0.9rem',
    marginBottom: '4px',
    display: 'block'
};

const aslTextStyle: React.CSSProperties = {
    fontSize: '1.4rem', 
    fontWeight: 'bold', 
    color: colors.QuizIncorrect 
};

export default ArticlePage;

