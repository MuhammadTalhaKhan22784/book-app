import "./BrandCheckout.css";
import { useState } from "react";
//Components
import ItemRow from "../ItemRow/ItemRow";

const BrandCheckout = ({ name, ITEMS }) => {
  const [checkBrand, setCheckBrand] = useState(false);

  return (
    <div className="brand">
      <div className="top-brand">
        <div className="form-group">
          <input
            checked={checkBrand}
            onChange={(e) => {
              setCheckBrand(e.target.checked);
            }}
            type="checkbox"
            id={name}
          />
          <label htmlFor={name}></label>
        </div>
        <h3>
          <span>書商</span> {name}
        </h3>
      </div>
      <div className="main-table">
        <table>
          <thead>
            <tr className="heading">
              <th className="first-head" style={{ width: "40%" }}>
                商品
              </th>
              <th>價格</th>
              <th style={{ width: "156px" }}>數量</th>
              <th>小計</th>
              <th style={{ width: "24px" }}></th>
            </tr>
          </thead>
          <tbody>
            {ITEMS.map((elem, idx) => {
              return (
                <ItemRow
                  checkBrand={checkBrand}
                  {...elem}
                  key={elem.name + idx}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrandCheckout;
