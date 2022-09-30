import "./Pagination.css";
//ICON LIBRARY -----------------------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Pagination = () => {
  return (
    <div className="pagination">
      <FontAwesomeIcon className="line-left" icon={faChevronLeft} />
      <FontAwesomeIcon icon={faChevronLeft} />
      <p className="active-page">1</p>
      <p>2</p>
      <p>3</p>
      <p>...</p>
      <FontAwesomeIcon icon={faChevronRight} />
      <FontAwesomeIcon className="line-right" icon={faChevronRight} />
    </div>
  );
};

export default Pagination;
