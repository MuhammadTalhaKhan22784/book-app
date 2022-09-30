import "./Header.css";
// ICON LIB -----------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faSearch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [header, setHeader] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className="headerWrapper">
      <div className={`overlay ${header ? "open-overlay" : ""}`}></div>
      <header>
        <div className="left-header">
          <Link to={"/"}>
            {" "}
            <img src="/Assets/Logo.png" alt="" />
          </Link>
          <nav className={`${header ? "open-header" : ""}`}>
            <p onClick={() => setDropDown((prev) => !prev)} className="flex">
              <img src="/Assets/grid.svg" alt="" />
              圖書分類
              <FontAwesomeIcon icon={faChevronDown} />
            </p>
            <div
              className={`category-drop ${
                dropDown ? "category-drop-open" : ""
              }`}
            >
              <Link
                onClick={() => {
                  setDropDown(false);
                  setHeader(false);
                }}
                to={"/classification/all"}
              >
                高中
              </Link>
              <Link
                onClick={() => {
                  setDropDown(false);
                  setHeader(false);
                }}
                to={"/classification/高職"}
              >
                高職
              </Link>
              <Link
                onClick={() => {
                  setDropDown(false);
                  setHeader(false);
                }}
                to={"/classification/國中"}
              >
                國中
              </Link>
              <Link
                onClick={() => {
                  setDropDown(false);
                  setHeader(false);
                }}
                to={"/classification/國小"}
              >
                國小
              </Link>
              <Link
                onClick={() => {
                  setDropDown(false);
                  setHeader(false);
                }}
                to={"/classification/檢定考試"}
              >
                檢定考試
              </Link>
              <Link
                onClick={() => {
                  setDropDown(false);
                  setHeader(false);
                }}
                to={"/classification/學齡前"}
              >
                學齡前
              </Link>
              <Link
                onClick={() => {
                  setDropDown(false);
                  setHeader(false);
                }}
                to={"/classification/e-book"}
              >
                課外讀物
              </Link>
            </div>
            <Link onClick={() => setHeader(false)} to={"/cloud-library"}>
              雲端圖書館
            </Link>
            <Link onClick={() => setHeader(false)} to={"/news"}>
              最新消息
            </Link>
            <Link onClick={() => setHeader(false)} to={"/subscription-plans"}>
              訂閱方案
            </Link>
            <Link onClick={() => setHeader(false)} to={"/aboutus"}>
              關於我們
            </Link>
          </nav>
        </div>
        <div className="right-header">
          <div className="input-div">
            <input type="text" placeholder="搜尋書籍名稱、出版社" />
            <Link to={"/search"}>
              <FontAwesomeIcon icon={faSearch} />
            </Link>
          </div>
          <button>登入</button>{" "}
          <FontAwesomeIcon
            onClick={() => {
              setHeader((prev) => !prev);
            }}
            icon={header ? faXmark : faBars}
            className="header-toggle"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
