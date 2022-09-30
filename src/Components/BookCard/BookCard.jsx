import "./BookCard.css";
// REACT ROUTER -------------------
import { Link } from "react-router-dom";
//ICON LIB -------------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const BookCard = ({ img, name, rating, price, purchased }) => {
  return (
    <Link to={"/detail"} className="slide-box">
      <img src={img} alt="" />
      <div className="flex">
        <h3>{name}</h3>
        <FontAwesomeIcon icon={faHeart} />
      </div>
      <div className="flex">
        <h4>
          {rating} <FontAwesomeIcon icon={faStar} />
        </h4>
        <p>{purchased ? "訂閱後可觀看" : `$${price}`}</p>
      </div>
    </Link>
  );
};

export default BookCard;
