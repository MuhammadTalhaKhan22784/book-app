import "./ItemRow.css";
import { useState } from "react";
// ICON LIB ----------------------
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemRow = ({ checkBrand, img, name, price }) => {
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(price * quantity);
  const [checked, setChecked] = useState(false);

  return (
    <tr className="item-row">
      <td>
        <div className="item-cart">
          <div className="form-group">
            <input
              checked={checkBrand ? checkBrand : checked}
              onChange={(e) => setChecked(e.target.checked)}
              type="checkbox"
              id={name}
            />
            <label htmlFor={name}></label>
          </div>
          <img src={img} alt="" />
          <h4>{name}</h4>
        </div>
      </td>
      <td>
        <p>${price}</p>
      </td>
      <td>
        <div className="calc">
          <FontAwesomeIcon
            style={quantity === 0 ? { opacity: 0.5 } : ""}
            icon={faMinus}
            onClick={() => {
              if (quantity > 0) {
                setQuantity((prev) => prev - 1);
                setTotal(quantity * price);
              }
            }}
          />
          <input
            onChange={(e) => {
              setQuantity(e.target.value);
              setTotal(quantity * price);
            }}
            type="number"
            value={quantity}
          />
          <FontAwesomeIcon
            onClick={() => {
              setQuantity((prev) => prev + 1);
              setTotal(quantity * price);
            }}
            icon={faPlus}
          />
        </div>
      </td>
      <td>
        <p>${total}</p>
      </td>
      <td>
        <div className="remove-item">
          <FontAwesomeIcon icon={faXmarkCircle} />
        </div>
      </td>
    </tr>
  );
};

export default ItemRow;
