import "./App.css";
import List from "./List";
import Cart from "./Cart";
import logo from "./assets/nike.png";
import { useCart } from "react-use-cart";
function App() {
  const { cartTotal } = useCart();

  return (
    <div className="App">
      {/* Card Left */}
      <div className="App_content">
        <div className="App_top">
          <img src={logo} alt="" className="App_top_logo" />
        </div>
        <div className="App_title">Our Products</div>
        <div className="App_body">
          <List />
        </div>
      </div>

      {/* Card Right */}
      <div className="App_content">
        <div className="App_top">
          <img src={logo} alt="" className="App_top_logo" />
        </div>
        <div className="App_title">
          Your cart
          <span className="App_title_amount" style={{ float: "right" }}>
            ${cartTotal.toFixed(2)}
          </span>
        </div>
        <div className="App_body">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
