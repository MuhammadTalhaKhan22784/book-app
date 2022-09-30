import "./CloudLib.css";
import { useState } from "react";
//Components
import BookCard from "../../Components/BookCard/BookCard";
//BOOTSTRAP -----------------------
import { Container, Form } from "react-bootstrap";
//ICON LIBRARY ---------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faXmark } from "@fortawesome/free-solid-svg-icons";

const CloudLib = () => {
  const [activeSide, setActiveSide] = useState("全部");
  const [mobileFilterMenu, setMobileFilterMenu] = useState(false);
  const clickHandler = (name) => {
    setActiveSide(name);
  };
  const SIDEBAR__MENU__ITEMS = [
    "全部",
    "文學小說",
    "商業理財",
    "人文社科",
    "心理勵志",
    "輕小說",
  ];
  return (
    <div className="cloud-lib">
      <Container fluid>
        <div className="sidebar-lib">
          <h2>雲端圖書館</h2>
          <FontAwesomeIcon
            onClick={() => setMobileFilterMenu(true)}
            icon={faFilter}
          />
          <div
            onClick={() => setMobileFilterMenu(false)}
            className={`overlay ${mobileFilterMenu ? "open-overlay" : ""}`}
          ></div>
          <div
            className={`side-items-div ${
              mobileFilterMenu ? "active-side-menu" : ""
            }`}
          >
            <FontAwesomeIcon
              onClick={() => setMobileFilterMenu(false)}
              icon={faXmark}
            />
            {SIDEBAR__MENU__ITEMS.map((elem, idx) => {
              return (
                <p
                  key={"side-items" + idx}
                  onClick={() => {
                    clickHandler(elem);
                    setMobileFilterMenu(false);
                  }}
                  className={`side-item ${
                    activeSide === elem ? "active-side" : ""
                  }`}
                >
                  {elem}
                </p>
              );
            })}
          </div>
        </div>
        <div className="library-grid">
          {activeSide !== SIDEBAR__MENU__ITEMS[0] && (
            <Form.Group>
              <Form.Select>
                <option>全部主題</option>
                <option>全部主題</option>
                <option>全部主題</option>
                <option>全部主題</option>
              </Form.Select>
            </Form.Group>
          )}
          <div className="lib-cards-grid">
            <BookCard
              img={"/Assets/landing/book.png"}
              name={"圖解數學"}
              rating="4.4"
              price={"60"}
            />
            <BookCard
              img={"/Assets/landing/book.png"}
              name={"圖解數學"}
              rating="4.4"
              price={"60"}
            />
            <BookCard
              img={"/Assets/landing/book.png"}
              name={"圖解數學"}
              rating="4.4"
              price={"60"}
            />
            <BookCard
              img={"/Assets/landing/book.png"}
              name={"圖解數學"}
              rating="4.4"
              price={"60"}
            />
            <BookCard
              img={"/Assets/landing/book.png"}
              name={"圖解數學"}
              rating="4.4"
              price={"60"}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CloudLib;
