import "./NewsBox.css";
//REACT ROUTER DOM-------------------
import { Link } from "react-router-dom";

const NewsBox = ({ img, head, caption, date }) => {
  return (
    <Link to={"/news-detail"} className="news-box">
      <img src={img} alt="" />
      <h3>{head}</h3>
      <p>{caption}</p>
      <h4>{date}</h4>
    </Link>
  );
};

export default NewsBox;
