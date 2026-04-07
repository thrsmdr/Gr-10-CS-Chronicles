import React from "react";
import { pageContainerStyle, titleStyle, sectiontitlestyle, additionalInfoStyle, paragraphStyle } from "../theme";
import { LessonData } from "../data/LessonData";
import LessonSelectCard from "../src/components/LessonSelectCard";

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

const LessonSelectPage: React.FC = () => {
    return (
        <div style={pageContainerStyle}>
            <h1 style={titleStyle}>ASL Lessons</h1>
            <p style={paragraphStyle}> Retain basic signs more efficiently through gamified lessons. For more comprehensive information on sentence construction, check out the article page! </p>

            <div style={gridStyle}>
                {LessonData.map((lesson) => (
                    <LessonSelectCard
                        key={lesson.id}
                        icon={lesson.icon}
                        title={lesson.title}
                        nosigns={lesson.nosigns}
                        description={lesson.description}
                        link={lesson.link} id={""} category={""} totalPhases={lesson.totalPhases} />
                ))}
            </div>

            <div>
                        <h2 style={sectiontitlestyle}>More Reliable Sources from Professionals</h2>
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
}    

export default LessonSelectPage;
