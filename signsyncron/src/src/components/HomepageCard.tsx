import React from "react";
import { colors } from "../../theme";
import { Link } from "react-router-dom";
import type { HomepageCardProps } from "../../types/types";

const HomepageCard: React.FC<HomepageCardProps> = ({ title, description, linkUrl, logo }) => {
    const LogoComponent = typeof logo === 'string' ? null : logo;
    
    return (
        <div style={HomepageCardStyle}>
            <h2 style={titleStyle}>{title}</h2>
            {typeof logo === 'string' ? (
                <img src={logo} style={logoStyle} />
            ) : LogoComponent ? (
                <LogoComponent style={logoStyle} />
            ) : null}
            <p style={descriptionStyle}>{description}</p>   
            <Link to={linkUrl} style={linkStyle}>!</Link>
        </div>
    );
};

const HomepageCardStyle: React.CSSProperties = {
    backgroundColor: colors.MainCard,
    borderRadius: '12px',
    borderColor: colors.MainAction,
    borderWidth: '0.5px',
    borderStyle: 'solid',
    padding: '16px',
    margin: '16px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

const titleStyle: React.CSSProperties = {
    color: colors.MainTextPrimary,
    fontFamily: 'Arial, sans-serif',
    fontSize: '24px',
    fontWeight: '700',
    fontStyle: 'small-caps',
    marginBottom: '8px',
};

const logoStyle: React.CSSProperties = {
    width: '100px',
    height: '100px',
    marginBottom: '16px',
    color: colors.MainAction,
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
    color: colors.MainActionText,
    textDecoration: 'none',
    backgroundColor: colors.MainAction,
    padding: '10px 15px',
    borderRadius: '8px',
    display: 'inline-block',
    marginTop: '10px',
};
export default HomepageCard;    
//how to make more rectangular. button??