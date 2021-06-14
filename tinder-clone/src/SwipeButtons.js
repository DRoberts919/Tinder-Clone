import React from "react";
import "./SwipeButtons.css";
import IconButton from "@material-ui/core/IconButton";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import FavoriteICon from "@material-ui/icons/Favorite"
import { Icon } from "@material-ui/core";

function SwipeButtons() {
  return (<div className="SwipeButtons">

      <IconButton className="swipeButtons_repeat">
          <ReplayIcon fontSize="large"/>
      </IconButton>
      <IconButton className="swipeButtons_left">
          <CloseIcon fontSize="large"/>
      </IconButton>
      <IconButton className="swipeButtons_star">
          <StarRateIcon fontSize="large"/>
      </IconButton>
      <IconButton className="swipeButtons_right">
          <FavoriteICon fontSize="large"/>
      </IconButton>
      <IconButton className="swipeButtons_lightning">
          <FlashOnIcon fontSize="large"/>
      </IconButton>

  </div>);
}

export default SwipeButtons;
