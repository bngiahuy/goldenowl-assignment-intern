import React from "react";
import "./Cart.css";
import { useCart } from "react-use-cart";
import trash from "./assets/trash.png";

function Cart() {
  const { isEmpty, items, updateItemQuantity, removeItem, cartTotal } =
    useCart();

  if (isEmpty)
    return (
      <div className="EmptyBlock">
        <p className="EmptyText">Your cart is empty.</p>
      </div>
    );
  return (
    <>
      {items.map((item) => {
        return (
          <div key={item.name + item.id}>
            <div className="Cart_item">
              <div className="Cart_itemLeft">
                <div
                  className="Cart_itemImg"
                  style={{ backgroundColor: "rgb(225, 231, 237)" }}
                >
                  <div className="Cart_itemBlock">
                    <img src={item.image} alt="" />
                  </div>
                </div>
              </div>
              <div className="Cart_itemRight">
                <div className="Cart_itemName">{item.name}</div>
                <div className="Cart_itemPrice">${item.price}</div>
                <div className="Cart_itemAction">
                  <div className="Cart_itemCount">
                    <div
                      className="Cart_itemCountButton"
                      onClick={() => {
                        updateItemQuantity(item.id, item.quantity - 1);
                        // cartTotal -= item.price;
                      }}
                    >
                      -
                    </div>
                    <div className="Cart_itemCountNumber">{item.quantity}</div>
                    <div
                      className="Cart_itemCountButton"
                      onClick={() => {
                        updateItemQuantity(item.id, item.quantity + 1);
                        // cartTotal += item.price;
                      }}
                    >
                      +
                    </div>
                  </div>
                  <div className="Cart_itemRemove">
                    <img
                      src={trash}
                      alt=""
                      onClick={() => removeItem(item.id)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default Cart;
