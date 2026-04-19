import { colors } from "../../theme";
import React from "react";
import { Link } from "react-router-dom";
import { Spotlight, BookOpen, Puzzle, InfoIcon } from "lucide-react";

const navStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1.5rem",
  position: "sticky",
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: '#f3f2f2',
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const logoStyle = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: colors.MainIcons
};

const titleStyle = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  justifyContent: "center",
  color: colors.MainIcons,
  marginLeft: "10px"
};

const linksContainerStyle: React.CSSProperties = {
  display: "flex",
  gap: "50px",
  flexWrap: "wrap",
  textAlign: "center",
};

const linkStyle = {
  color: colors.MainIcons,
  textDecoration: "none",
  fontWeight: 'bold'
};

const NavBar: React.FC = () => {
  return (
    <nav style={navStyle}>
      <div style={logoStyle}>
        <Link to="/" style={linkStyle}><img src="https://res.cloudinary.com/dqzxf6v8b/image/upload/Untitled47_20260419101159.png" width="35" height="28"></img></Link>
      </div>
      <div style={titleStyle}> Sign_Sync </div>
      <div style={linksContainerStyle}>
        <Link to="/lessons" style={linkStyle}><Puzzle size={24} color={colors.MainIcons} /></Link>
        <Link to="/dictionary" style={linkStyle}><BookOpen size={24} color={colors.MainIcons} /></Link>
        <Link to="/article" style={linkStyle}><Spotlight size={24} color={colors.MainIcons} /></Link>
        <Link to="/info" style={linkStyle}><InfoIcon size={24} color={colors.MainIcons} /></Link>
      </div>
    </nav>
  );
}

export default NavBar;