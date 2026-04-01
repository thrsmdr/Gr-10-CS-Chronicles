import React from "react";

interface VideoPlaceholderProps {
    videoUrl: string;
    altText?: string;
}

const VideoPlaceholder: React.FC<VideoPlaceholderProps> = ({ videoUrl = "Video Placeholder" }) => {
    return (
        <div style={placeholderStyle}>
            <video
                key={videoUrl} 
                src={videoUrl}
                style={videoStyle}
                controls
                loop
                muted
                playsInline
            >
            </video>
        </div>
    );
};

const placeholderStyle: React.CSSProperties = {
    // REMOVED: fixed 150px height and maxWidth
    width: '100%', 
    maxWidth: '600px', // Much larger "Hero" size for better visibility
    aspectRatio: '16 / 9', // Standard video ratio
    borderRadius: '24px', // Softer, more modern corners
    overflow: 'hidden',
    backgroundColor: '#000', // Black background looks better for video letterboxing
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)', // Makes it pop off the dark background
    margin: '0 auto', // Centers it if the parent is wide
};

const videoStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
};

export default VideoPlaceholder;