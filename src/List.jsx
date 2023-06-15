import React from "react";
import "./List.css";
import ListData from "./data/shoes.json";
import { useCart } from "react-use-cart";
import check from "./assets/check.png";

function List() {
  const { inCart, addItem } = useCart();
  function AddToCart(item) {
    return (
      <div className="item_add_button" onClick={() => addItem(item)}>
        <p>ADD TO CART</p>
      </div>
    );
  }

  function CheckBox() {
    return (
      <div className="item_add_button_inactive item_add_button">
        <div className="item_add_button_cover">
          <img src={check} alt="" className="item_add_button_checkbox" />
        </div>
      </div>
    );
  }
  return (
    <div>
      {ListData.shoes.map((item) => {
        return (
          <div className="item" key={item.name + item.id}>
            <div className="item_img">
              <img src={item.image} alt="" />
            </div>
            <div className="item_name">{item.name}</div>
            <div className="item_description">{item.description}</div>
            <div className="item_bottom">
              <div className="item_price">${item.price.toFixed(2)}</div>
              {!inCart(item.id) ? AddToCart(item) : CheckBox()}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default List;
