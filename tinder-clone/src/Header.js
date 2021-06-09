import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import IconCutton from "@material-ui/core/IconButton";
import "./Header.css";
import tinderLogo from './images/Tinder-logo.png'
import ForumIcon from '@material-ui/icons/Forum'

function Header() {
  return (
    <div className="header">
      <IconCutton>
        <PersonIcon fontSize="large" className="header_icon" />
      </IconCutton>

      <img src={tinderLogo} className="header_logo" alt="" />

      <IconCutton>
        <ForumIcon fontSize="large" className="header_icon"/>
      </IconCutton>
      
    </div>
  );
}

export default Header;
