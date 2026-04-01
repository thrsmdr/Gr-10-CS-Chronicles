import ArticleCard from "../src/components/ArticleCard";
import { pageContainerStyle, titleStyle } from "../theme";
import { useNavigate } from 'react-router-dom';

const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    maxWidth: '1400px',
    width: '100%',
    padding: '20px',
    margin: '0 auto',
    boxSizing: 'border-box'  
};

const ArticleSelectPage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div style={pageContainerStyle}>
            <h1 style={titleStyle}>ASL Articles</h1>
            <div style={gridStyle}>
                <ArticleCard
                    id="1"
                    title="ASL Grammar"
                    description="Lay the foundation for constructing sentences in ASL, covering word order, non-manual signals, and common sentence types."
                    onClick={() => navigate('/article/1')}         />
                <ArticleCard
                    id="2"
                    title="ASL Parameters"
                    description="Elements of ASL that are essential to understand to communicate effectively."
                    onClick={() => navigate('/article/2')}             />
                <ArticleCard
                    id="3"
                    title="Sign Language Etiquette"
                    description="Learn the do's and don'ts of interacting with Deaf individuals and using sign language respectfully."
                    onClick={() => navigate('/article/3')}             />
            </div>
        </div>
    );
};

export default ArticleSelectPage;


// how to link it to each article page?
