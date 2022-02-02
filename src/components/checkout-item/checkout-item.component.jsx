import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.action";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name} </span>
      <span className="quantity">
        <button className="decrease" onClick={() => removeItem(cartItem)}>
          -
        </button>
        <span className="value"> &nbsp; {quantity}&nbsp;</span>
        <button className="increase" onClick={() => addItem(cartItem)}>
          +
        </button>
      </span>
      <span className="price">{price} </span>
      <button className="remove-symbol" onClick={() => clearItem(cartItem)}>
        &#10006;
      </button>
      <div className="remove-button"></div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
