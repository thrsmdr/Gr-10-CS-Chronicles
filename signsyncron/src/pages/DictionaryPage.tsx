import React, { useState } from 'react';
import DictionaryCard from '../src/components/DictionaryCard';
import { DictionaryData } from '../data/DictionaryData';
import { pageContainerStyle, sectiontitlestyle, titleStyle, additionalInfoStyle } from '../theme';

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


const filterContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '40px',
};

const DictionaryPage: React.FC = () => {
    // 1. State for the active category
    const [activeCategory, setActiveCategory] = useState<string>('All');

    // 2. Get unique categories from your data
    const categories = ['All', ...new Set(DictionaryData.map(item => item.category))];

    // 3. Filter the data
    const filteredData = activeCategory === 'All' 
        ? DictionaryData 
        : DictionaryData.filter(item => item.category === activeCategory);

    return (
        <div style={pageContainerStyle}>
            <h1 style={titleStyle}>ASL Dictionary</h1>

            <div style={filterContainerStyle}>
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        style={{
                            padding: '8px 16px',
                            borderRadius: '20px',
                            border: '1px solid #ddd',
                            cursor: 'pointer',
                            backgroundColor: activeCategory === category ? '#007AFF' : '#fff', // Change color if active
                            color: activeCategory === category ? '#fff' : '#333',
                            fontWeight: '500',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div style={gridStyle}>
                {filteredData.map((word) => (
                    <DictionaryCard 
                        id={word.id} 
                        signWord={word.signWord}
                        category={word.category}
                        videoUrl={word.videoUrl}
                        notes={word.notes}
                        key={word.id}
                    />
                ))}
            </div>

            {/* --- Footer Section (External Links) --- */}
            <div style={{ marginTop: '60px' }}>
                <h2 style={sectiontitlestyle}>More Reliable Sources from Professionals</h2>
                <div style={{...additionalInfoStyle, marginBottom: '16px'}}>
                    <a href="https://www.aslbloom.com" target="_blank" rel="noopener noreferrer">ASL Bloom - Learn American Sign Language (ASL) Online</a><br />
                    <a href="https://www.lifeprint.com/" target="_blank" rel="noopener noreferrer">Lifeprint - ASL University</a><br />
                    <a href="https://www.youtube.com/billvicars" target="_blank" rel="noopener noreferrer">Bill Vicars</a><br />
                    <a href="https://www.youtube.com/@LearnHowtoSign.com/" target="_blank" rel="noopener noreferrer">Learn How To Sign</a><br />
                    <a href="https://learnhowtosign.com/courses/" target="_blank" rel="noopener noreferrer">Learn How To Sign - Courses</a>
                </div>
            </div>
        </div>
    );
};

export default DictionaryPage;