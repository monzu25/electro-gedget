import React from "react";
import "./collection-item.styles.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />

    <div className="collection-footer p-2 mb-2">
      <span className="name">{name}</span>
    </div>
    <div className="d-flex justify-content-between w-100 p-2">
      <span> Price: ${price}</span>
      <span>*****</span>
    </div>
  </div>
);

export default CollectionItem;
