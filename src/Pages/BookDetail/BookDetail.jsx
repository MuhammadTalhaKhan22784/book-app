import "./BookDetail.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

//ICON LIB --------------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStarHalfStroke } from "@fortawesome/free-regular-svg-icons";
import {
  faHouse,
  faStar,
  faHeart as faSolidHeart,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
// BOOTSTRAP ------------------------------
import { Col, Container, Row } from "react-bootstrap";

// SLIDER ------------------------
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

//Review Component------------------
const Review = ({ img, date, review }) => {
  return (
    <div className="profile-review">
      <div className="flex">
        <img src={img} alt="" />
        <div className="review-col">
          <div className="stars small-star">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalfStroke} />
          </div>
          <p className="small">{date}</p>
        </div>
      </div>
      <h5>{review}</h5>
    </div>
  );
};
//SuggestedBook Component------------------
const SuggestedBook = ({ img, title, desc }) => {
  return (
    <Link to={"/detail"} className="suggested-book">
      <div className="flex">
        <img src={img} alt="" />
        <div className="text-col">
          <h6>{title}</h6>
          <h6>{desc}</h6>
        </div>
      </div>
      <FontAwesomeIcon icon={faHeart} />
    </Link>
  );
};

const BookDetail = () => {
  const [heart, setHeart] = useState(false);
  const [tab, setTab] = useState("detail");
  const [gallery, setGallery] = useState(false);
  const REVIEWS = [
    {
      img: "/Assets/avatar.png",
      date: "2022-04-30 來自fewi2***233的評論",
      review:
        "講義編排得很有邏輯！覺得很好閱讀～講義編排得很有邏輯！覺得很好閱讀～講義編排得很有邏輯！覺得很好閱讀～",
    },
    {
      img: "/Assets/avatar2.png",
      date: "2022-04-30 來自fewi2***233的評論",
      review: "大推這本！考前讀非常有效",
    },
  ];
  const SUGGESTED = [
    {
      img: "/Assets/landing/book.png",
      title: "真希望高中數學這樣教",
      desc: "訂閱後可觀看",
    },
    {
      img: "/Assets/landing/book.png",
      title: "真希望高中數學這樣教",
      desc: "訂閱後可觀看",
    },
    {
      img: "/Assets/landing/book.png",
      title: "真希望高中數學這樣教",
      desc: "訂閱後可觀看",
    },
    {
      img: "/Assets/landing/book.png",
      title: "真希望高中數學這樣教",
      desc: "訂閱後可觀看",
    },
  ];
  return (
    <div className="book-wrapper">
      {gallery && (
        <>
          <div
            className="overlay-gallery"
            onClick={() => setGallery(false)}
          ></div>
          <div className="larger-view">
            {" "}
            <FontAwesomeIcon
              className="close-gal"
              icon={faXmark}
              onClick={() => setGallery(false)}
            />
            <Splide
              options={{
                arrows: true,
                pagination: true,
                perPage: 1,
                perMove: 1,
                type: "loop",
                width: "500px",
                drag: true,
                breakpoints: {
                  540: {
                    width: "100%",
                  },
                },
              }}
              className="detail-slider"
            >
              <SplideSlide>
                <img src="/Assets/big-book.png" alt="" />
              </SplideSlide>
              <SplideSlide>
                <img src="/Assets/big-book.png" alt="" />
              </SplideSlide>
              <SplideSlide>
                <img src="/Assets/big-book.png" alt="" />
              </SplideSlide>
              <SplideSlide>
                <img src="/Assets/big-book.png" alt="" />
              </SplideSlide>
            </Splide>
          </div>
        </>
      )}
      <Container fluid>
        <Row>
          <Col xl={6}>
            <div className="left-book">
              <h3>
                <FontAwesomeIcon icon={faHouse} /> 首頁 / 高中書籍 /{" "}
              </h3>
              <h1>應用國文</h1>
              <h2>科目｜國文</h2>
              <h2>版本｜台灣五南圖書出版股份有限公司</h2>
              <h2>出版日期｜2014年8月</h2>
              <h2>書籍款式｜實體書</h2>
              <div className="btn-div">
                <button>立即購買: $60</button>
                <button
                  onClick={() => {
                    toast.success("已加入購物車", {
                      position: "top-center",
                      hideProgressBar: true,
                    });
                  }}
                  className="inverse"
                >
                  加入購物車
                </button>
                <p>
                  <FontAwesomeIcon
                    icon={heart ? faSolidHeart : faHeart}
                    onClick={() => {
                      setHeart((prev) => !prev);
                      if (!heart) {
                        toast.success("已加入收藏", {
                          position: "top-center",
                          hideProgressBar: true,
                        });
                      } else {
                        toast.warning("已移除收藏", {
                          position: "top-center",
                          hideProgressBar: true,
                        });
                      }
                    }}
                  />{" "}
                  加入收藏
                </p>
              </div>
              <h2>購買數量大於20本，可享有批發價$30</h2>
              <div className="tabs">
                <p
                  onClick={() => setTab("detail")}
                  className={`${tab === "detail" ? "active-tab" : ""}`}
                >
                  詳細資訊
                </p>
                <p
                  onClick={() => setTab("review")}
                  className={`${tab === "review" ? "active-tab" : ""}`}
                >
                  評價
                </p>
              </div>
              {tab === "detail" && (
                <div className="book-detail">
                  <div>
                    <h3>關於本書</h3>
                    <p>
                      古今文章詩詞特色一 <br />
                      古今文章詩詞一網打盡，市面上最用心，CP值最高的閱讀參考書。
                      <br />
                      古今文章詩詞特色二 <br />
                      每回古今文主題一致，同一內含相互闡發，呼應文章，藉由短篇閱讀並精心設計題庫練習。{" "}
                      <br />
                      古今文章詩詞特色三 <br />
                      仿照大考「閱讀題組」出題共有100回試題、解析詳盡，贏在起跑點。{" "}
                      <br />
                    </p>
                  </div>
                  <div>
                    <h3>目錄</h3>
                    <p>李 肇／唐國史補</p>
                    <p>方孝孺／越巫</p>
                    <p>晏 嬰／晏子春秋．內篇諫上第一</p>
                    <p>顏之推／慕賢</p>
                    <p>宋 濂／狸狌</p>
                    <p>李 華／弔古戰場文</p>
                    <p>柳宗元／童區寄傳</p>
                    <p>周禮．考工記</p>
                    <p>沈 括／夢溪筆談．活板</p>
                    <p>荀 子／天論</p>
                    <p>左丘明／左傳．成公十年</p>
                    <p>宋應星／天工開物．珠玉</p>
                    <p>沈 括／夢溪筆談．神奇</p>
                    <p>李商隱／李賀小傳</p>
                    <p>賈 誼／弔屈原賦并序</p>
                    <p>揚 雄／反離騷并序</p>
                    <p>黃庭堅／題東坡字後</p>
                    <p>辛文房／唐才子傳．杜甫</p>
                    <p>司馬光／資治通鑑．魏紀</p>
                    <p>司馬遷／史記．項羽本紀</p>
                  </div>
                </div>
              )}
              {tab === "review" && (
                <div className="review-tab">
                  <h4>總評價</h4>
                  <div className="flex">
                    <h1>4.5</h1>
                    <div className="review-col">
                      <div className="stars">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarHalfStroke} />
                      </div>
                      <p>36 人評分·2 則心得</p>
                    </div>
                  </div>
                  {REVIEWS.map((elem, idx) => {
                    return <Review {...elem} key={"review" + idx} />;
                  })}
                </div>
              )}
            </div>
          </Col>
          <Col xl={6}>
            <div className="right-book">
              <div className="flex slider-col">
                <Splide
                  options={{
                    arrows: true,
                    pagination: true,
                    perPage: 1,
                    perMove: 1,
                    width: "500px",
                    drag: true,
                  }}
                  className="detail-slider"
                >
                  <SplideSlide>
                    <img
                      onClick={() => setGallery(true)}
                      src="/Assets/big-book.png"
                      alt=""
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <img
                      onClick={() => setGallery(true)}
                      src="/Assets/big-book.png"
                      alt=""
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <img
                      onClick={() => setGallery(true)}
                      src="/Assets/big-book.png"
                      alt=""
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <img
                      onClick={() => setGallery(true)}
                      src="/Assets/big-book.png"
                      alt=""
                    />
                  </SplideSlide>
                </Splide>
              </div>
              <div className="suggested">
                <h2>推薦書籍</h2>
                {SUGGESTED.map((elem, idx) => {
                  return <SuggestedBook {...elem} key={"suggest" + idx} />;
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookDetail;
