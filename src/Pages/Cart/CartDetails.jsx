import "./styles/CartDetails.css";
//Components
import BrandCheckout from "../../Components/BrandCheckOut/BrandCheckout";
import { useState } from "react";
//ICON LIB ----------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CartDetails = () => {
  const [coupen, setCoupen] = useState("");
  const [coupenCodeUsed, setCoupenCodeUsed] = useState([]);
  const BRANDS = [
    {
      name: "龍騰文化",
      ITEMS: [
        {
          img: "/Assets/big-book.png",
          price: 60,
          name: "應用國文",
        },
        {
          img: "/Assets/big-book.png",
          price: 60,
          name: "應用國文2",
        },
      ],
    },
    {
      name: "龍騰文化3",
      ITEMS: [
        {
          img: "/Assets/big-book.png",
          price: 60,
          name: "應用國文3",
        },
      ],
    },
  ];
  const addCoupen = () => {
    const newCode = { discount: -50, code: coupen };
    setCoupen("");
    setCoupenCodeUsed((prev) => {
      return [...prev, { ...newCode }];
    });
  };
  return (
    <div className="cart-details">
      {BRANDS.map((elem, idx) => {
        return <BrandCheckout {...elem} key={elem.name + idx} />;
      })}
      <div className="coupen-div">
        <div className="top-coupen-div">
          <div className="left-coupen flex">
            <input
              onChange={(e) => {
                setCoupen(e.target.value);
              }}
              value={coupen}
              type="text"
              placeholder="輸入優惠券代碼"
            />
            <button
              onClick={addCoupen}
              className={`${coupen.length ? "active-btn" : ""}`}
            >
              兌換優惠券
            </button>
          </div>
          <button className="inverse">更新購物車</button>
        </div>
        {coupenCodeUsed?.map((elem, idx) => {
          return (
            <div className="added-coupen" key={"coupen" + idx}>
              <div className="flex">
                <img src="/Assets/coupon.svg" alt="" />
                <h5>{elem.code}</h5>
              </div>
              <p>{elem.discount}%</p>
              <FontAwesomeIcon
                icon={faXmarkCircle}
                onClick={() => {
                  const newCoupens = coupenCodeUsed.filter((code) => {
                    return elem.code !== code.code;
                  });
                  setCoupenCodeUsed(newCoupens);
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="grand-total">
        <div className="price-div">
          <h6>小計</h6>
          <h6>$ 0</h6>
        </div>
        <div className="price-div">
          <h6>總計</h6>
          <h6>$ 0</h6>
        </div>
        <Link to={"/cart/info"}>
          <button>下一步</button>
        </Link>
      </div>
    </div>
  );
};

export default CartDetails;
