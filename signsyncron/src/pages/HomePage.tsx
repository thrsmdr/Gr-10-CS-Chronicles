import React from "react";
import HomepageCard from '../src/components/HomepageCard';
import { pageContainerStyle, titleStyle, sectiontitlestyle, additionalInfoStyle, colors, secondaryheaderStyle } from "../theme";
import { Spotlight, BookOpen, Puzzle, InfoIcon } from "lucide-react";

const HomePage: React.FC = () => {
    return (
        <div style={pageContainerStyle}>
            <div style={logoStyle}>
                <img src="https://res.cloudinary.com/dqzxf6v8b/image/upload/Untitled47_20260419101159.png" width="100" height="80" />
            </div>
            <h1 style={titleStyle}>Welcome to Sign_Sync</h1>
            <p style={secondaryheaderStyle}>Discover more about the world of sign language through: </p>
        <div style={gridStyle}>
            <HomepageCard
                title="ASL Lessons"
                logo={Puzzle}
                description="Engage with gamified ASL lessons and learn new signs."
                linkUrl="/lessons"
            />
            <HomepageCard
                title="ASL Dictionary"
                logo={BookOpen}
                description="Explore our comprehensive ASL dictionary with video demonstrations and detailed notes for each sign."
                linkUrl="/dictionary"
            />
            <HomepageCard
                title="ASL Articles"
                logo={Spotlight}
                description="Want to learn how to make sentences in ASL? Read articles about ASL culture and learning tips."
                linkUrl="/article"
            />
            <HomepageCard
                title="About Sign_Sync"
                logo={InfoIcon}
                description="Learn more about Sign_Sync's mission."
                linkUrl="/info"
            />
        </div>
        <div>
            <h2 style={sectiontitlestyle}>More Detailed Learning Mediums:</h2>
            <div style={additionalInfoStyle}>
                <a href="https://www.aslbloom.com" target="_blank" rel="nopener noreferrer">ASL Bloom - Learn American Sign Language (ASL) Online</a><br />
                <a href="https://www.lifeprint.com/" target="_blank" rel="noopener noreferrer">Lifeprint - ASL University</a><br />
                <a href="https://www.youtube.com/billvicars" target="_blank" rel="noopener noreferrer">Bill Vicars</a><br />
                <a href="https://www.youtube.com/@LearnHowtoSign.com/" target="_blank" rel="noopener noreferrer">Learn How To Sign</a><br />
                <a href="https://learnhowtosign.com/courses/" target="_blank" rel="noopener noreferrer">Learn How To Sign - Courses</a>
            </div>

        </div>
        </div>


    );
};

const logoStyle = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: colors.MainIcons
};

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

export default HomePage;