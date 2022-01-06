import React from "react";
import "./menu-item.styles.scss";
import { useLocation, useNavigate } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  const navigate = useNavigate();
  let { pathname } = useLocation();

  return (
    <div className={`${size} menu-item`} onClick={() => navigate(`hats`)}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
