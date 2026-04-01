import React from "react";
import { pageContainerStyle, titleStyle, paragraphStyle, sectiontitlestyle, additionalInfoStyle } from "../theme";



const InfoPage: React.FC = () => {
    return (
        <div style={pageContainerStyle}>
            <h1 style={titleStyle}>About Sign_Sync</h1>
            <p style={paragraphStyle}>
                <img src="https://www.vecteezy.com/free-photos/disclaimer" alt="Disclaimer" />
                <br />
                SignSync was created by a novice in ASL and exists to only <strong>introduce</strong> standardized, widely accepted signs from ASL, but our dictionary <strong>does NOT dictate the entire language</strong>. Actual ASL varies between regions and has evolved over time. <br /><br />
                Resources by Deaf creators and qualified ASL teachers were compiled for the contents of this website in order to <strong>spark interest in ASL</strong>. It is encouraged to go to the linked resources throughout the site to learn ASL in more depth.<br /><br />
                Sign_Sync is not a comprehensive ASL dictionary, but rather a starting point for those interested in learning ASL. It is important to note that ASL is a complex and nuanced language that cannot be fully captured in a simple dictionary format. <strong>We encourage users to seek out additional resources and opportunities for practice in order to truly master the language.</strong>
            </p>
            <br />
            <h2 style={sectiontitlestyle}>More Reliable Sources from Professionals</h2>
            <p style={additionalInfoStyle}>
                <a href="https://www.aslbloom.com" target="_blank" rel="nopener noreferrer">ASL Bloom - Learn American Sign Language (ASL) Online</a><br />
                <a href="https://www.lifeprint.com/" target="_blank" rel="noopener noreferrer">Lifeprint - ASL University</a><br />
                <a href="https://www.youtube.com/billvicars" target="_blank" rel="noopener noreferrer">Bill Vicars</a><br />
                <a href="https://www.youtube.com/@LearnHowtoSign.com/" target="_blank" rel="noopener noreferrer">Learn How To Sign</a><br />
                <a href="https://learnhowtosign.com/courses/" target="_blank" rel="noopener noreferrer">Learn How To Sign - Courses</a>
            </p>
        </div>
    );
}

export default InfoPage;
            