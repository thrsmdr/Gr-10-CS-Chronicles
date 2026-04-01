import { colors } from "../../theme";
import React from "react";
import { Link } from "react-router-dom";
import { Spotlight, BookOpen, Puzzle, InfoIcon } from "lucide-react";

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
  backgroundColor: colors.MainBackground,
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const logoStyle = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: colors.MainIcons
};

const linksContainerStyle: React.CSSProperties = {
  display: "flex",
  gap: "50px",
  flexWrap: "wrap",
  justifyContent: "center",
};

const linkStyle = {
  color: colors.MainIcons,
  textDecoration: "none"
};

const NavBar: React.FC = () => {
  return (
    <nav style={navStyle}>
      <div style={logoStyle}>
        <Link to="/" style={linkStyle}><img src="/src/assets/logo.png" width="32" height="32"></img>SignSync</Link>
      </div>
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