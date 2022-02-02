import React from "react";
import "./collection-item.styles.scss";
import CustomeButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />

      <div className="collection-footer p-2 mb-2">
        <span className="name">{name}</span>
      </div>
      <div className="d-flex justify-content-between w-100 p-2">
        <span> Price: ${price}</span>
        <span>*****</span>
      </div>
      <CustomeButton onClick={() => addItem(item)} inverted>
        Ad To Cart
      </CustomeButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
