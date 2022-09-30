import "./styles/Cart.css";
import { useEffect, useState } from "react";
// BOOTSTRAP ---------------
import { Container } from "react-bootstrap";
// REACT ROUTER -------------------
import { Outlet, useLocation } from "react-router-dom";

const Cart = () => {
  const [activeNum, setActiveNum] = useState(3);
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "/cart":
        setActiveNum(1);
        break;
      case "/cart/info":
        setActiveNum(2);
        break;
      case "/cart/thanks":
        setActiveNum(3);
        break;

      default:
        break;
    }
  }, [location.pathname]);

  return (
    <div className="cartWrapper">
      <Container>
        <div className="cart-steps flex">
          <div className="step-col active-step">
            <h1>1</h1>
            <p>購物明細</p>
          </div>
          <div className="line active-line"></div>
          <div
            className={`step-col ${
              activeNum === 2
                ? "active-step line-inactive"
                : activeNum === 3
                ? "active-step"
                : ""
            }`}
          >
            <h1>2</h1>
            <p>填寫資料</p>
          </div>
          <div className="line"></div>
          <div className={`step-col ${activeNum === 3 ? "active-step" : ""}`}>
            <h1>3</h1>
            <p>完成購買</p>
          </div>
        </div>
        <Outlet />
      </Container>
    </div>
  );
};

export default Cart;
