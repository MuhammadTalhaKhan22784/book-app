import "./Classification.css";
import { useEffect, useState } from "react";
//BOOTSTRAP------------------
import { Container, Form } from "react-bootstrap";
//REACT ROUTER DOM -----------------------
import { useParams } from "react-router-dom";
//SLIDER ------------------------
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
//Components
import BookCard from "../../Components/BookCard/BookCard";
import Pagination from "../../Components/Pagination/Pagination";

const Classification = () => {
  const { category } = useParams();
  //dummy book data
  const BOOKS = [
    {
      img: "/Assets/landing/book.png",
      name: "圖解數學",
      rating: "4.4",
      price: "60",
    },
    {
      img: "/Assets/landing/book.png",
      name: "圖解數學",
      rating: "4.4",
      price: "60",
    },
    {
      img: "/Assets/landing/book.png",
      name: "圖解數學",
      rating: "4.4",
      price: "60",
    },
    {
      img: "/Assets/landing/book.png",
      name: "圖解數學",
      rating: "4.4",
      price: "60",
    },
    {
      img: "/Assets/landing/book.png",
      name: "圖解數學",
      rating: "4.4",
      price: "60",
    },
    {
      img: "/Assets/landing/book.png",
      name: "圖解數學",
      rating: "4.4",
      price: "60",
    },
    {
      img: "/Assets/landing/book.png",
      name: "圖解數學",
      rating: "4.4",
      price: "60",
    },
    {
      img: "/Assets/landing/book.png",
      name: "圖解數學",
      rating: "4.4",
      price: "60",
    },
  ];
  //main filters ALL/EBOOK/PHYSICAL BOOK
  const STYLES = ["全部款式", "訂閱電子書", "實體書"];
  //FILTERS FOR E_BOOKs
  const E__BOOK__FILTERS = {
    category: [
      "全部分類",
      "文學小說",
      "商業理財",
      "人文社科",
      "心理勵志",
      "輕小說",
    ],
    topics: [
      "全部主題",
      "翻譯文學",
      "華文創作",
      "詩",
      "文學研究",
      "中國古典文學",
      "國學常識",
      "世界經典文學",
      "懸疑/推理小說",
      "科幻/奇幻小說",
      "科幻/奇幻小說",
      "恐怖/驚悚小說",
      "溫馨/療癒小說",
      "傳記",
      "愛情小說",
      "羅曼史/言情小說",
      "歷史/武俠小說",
      "其他文學小說",
    ],
  };
  //FILTERS FOR THE PHYSICAL BOOKs
  const PHYSICAL__BOOK__FILTERS = {
    category: [
      "全部分類",
      "高中",
      "高職",
      "國中",
      "國小",
      "檢定考試",
      "學齡前",
    ],
    grade: ["全部年級", "一年級", "二年級", "三年級"],
    subject: [
      "全部科目",
      "國文",
      "英文",
      "數學",
      "物理",
      "化學",
      "生物",
      "地球科學",
      "自然",
      "歷史",
      "地理",
      "公民",
      "社會",
    ],
    versions: ["全部版本", "翰林", "龍騰", "南一", "三民"],
  };

  const [bookStyle, setBookStyle] = useState("全部款式");
  const [categoryBook, setCategoryBook] = useState("全部分類");
  const [bookGrade, setBookGrade] = useState("全部年級");
  const [bookSubject, setBookSubject] = useState("全部科目");
  const [bookVersion, setBookVersion] = useState("全部版本");
  const [topics, setTopics] = useState("全部主題");

  //to select a default value, when this page loads, depending on the navlink you clicked
  useEffect(() => {
    if (category === "e-book") {
      setBookStyle("訂閱電子書");
    } else {
      setBookStyle("全部款式");
    }
  }, [category]);

  //fuction to change the active class of the row item
  const clickHandler = (row, name) => {
    const selectedValue = name;
    switch (row) {
      case 1:
        setBookStyle(selectedValue);
        setCategoryBook("全部分類");
        break;
      case 2:
        setCategoryBook(selectedValue);
        break;
      case 3:
        setBookGrade(selectedValue);
        break;
      case 4:
        setBookSubject(selectedValue);
        break;
      case 5:
        setBookVersion(selectedValue);
        break;
      case 6:
        setTopics(selectedValue);
        break;

      default:
        break;
    }
  };
  return (
    <div className="book-category">
      <Container fluid>
        <div className="book-cat-filter-box">
          {/* Main headings ----------------------------- */}
          <Splide
            options={{
              drag: true,
              perMove: 1,
              autoWidth: true,
              width: "100%",
              arrows: false,
              pagination: false,
              gap: "30px",
              breakpoints: {
                500: {
                  arrows: true,
                },
              },
            }}
          >
            {STYLES.map((elem, idx) => {
              return (
                <SplideSlide key={"all styles" + idx}>
                  <p
                    onClick={() => clickHandler(1, elem)}
                    className={`${bookStyle === elem ? "active-cat" : ""}`}
                  >
                    {elem}
                  </p>
                </SplideSlide>
              );
            })}
          </Splide>
          {bookStyle !== STYLES[0] && (
            //if book style is not all
            <>
              {/* if book style is physical book */}
              {bookStyle === STYLES[2] && (
                <>
                  <Splide
                    options={{
                      drag: true,
                      perMove: 1,
                      autoWidth: true,
                      width: "100%",
                      arrows: false,
                      pagination: false,
                      gap: "30px",
                      breakpoints: {
                        862: {
                          arrows: true,
                        },
                      },
                    }}
                  >
                    {PHYSICAL__BOOK__FILTERS.category.map((elem, idx) => {
                      return (
                        <SplideSlide key={"physical-cat" + idx}>
                          <p
                            onClick={() => clickHandler(2, elem)}
                            className={`${
                              categoryBook === elem ? "active-cat" : ""
                            }`}
                          >
                            {elem}
                          </p>
                        </SplideSlide>
                      );
                    })}
                  </Splide>
                  {categoryBook !== PHYSICAL__BOOK__FILTERS.category[0] && (
                    //if category is all then these will be hidden otherwise they will be shown
                    <>
                      <Splide
                        options={{
                          drag: true,
                          perMove: 1,
                          autoWidth: true,
                          width: "100%",
                          arrows: false,
                          pagination: false,
                          gap: "30px",
                          breakpoints: {
                            550: {
                              arrows: true,
                            },
                          },
                        }}
                      >
                        {PHYSICAL__BOOK__FILTERS.grade.map((elem, idx) => {
                          return (
                            <SplideSlide key={"physical-grade" + idx}>
                              <p
                                onClick={() => clickHandler(3, elem)}
                                className={`${
                                  bookGrade === elem ? "active-cat" : ""
                                }`}
                              >
                                {elem}
                              </p>
                            </SplideSlide>
                          );
                        })}
                      </Splide>
                      <Splide
                        options={{
                          drag: true,
                          perMove: 1,
                          autoWidth: true,
                          width: "100%",
                          arrows: false,
                          pagination: false,
                          gap: "30px",
                          breakpoints: {
                            1378: {
                              arrows: true,
                            },
                          },
                        }}
                      >
                        {PHYSICAL__BOOK__FILTERS.subject.map((elem, idx) => {
                          return (
                            <SplideSlide key={"physical-subject" + idx}>
                              <p
                                onClick={() => clickHandler(4, elem)}
                                className={`${
                                  bookSubject === elem ? "active-cat" : ""
                                }`}
                              >
                                {elem}
                              </p>
                            </SplideSlide>
                          );
                        })}
                      </Splide>
                      <Splide
                        options={{
                          drag: true,
                          perMove: 1,
                          autoWidth: true,
                          width: "100%",
                          arrows: false,
                          pagination: false,
                          gap: "30px",
                          breakpoints: {
                            626: {
                              arrows: true,
                            },
                          },
                        }}
                      >
                        {PHYSICAL__BOOK__FILTERS.versions.map((elem, idx) => {
                          return (
                            <SplideSlide key={"physical-version" + idx}>
                              <p
                                onClick={() => clickHandler(5, elem)}
                                className={`${
                                  bookVersion === elem ? "active-cat" : ""
                                }`}
                              >
                                {elem}
                              </p>
                            </SplideSlide>
                          );
                        })}
                      </Splide>
                    </>
                  )}
                </>
              )}
              {/* if book style is e-book */}
              {bookStyle === STYLES[1] && (
                <>
                  <Splide
                    options={{
                      drag: true,
                      perMove: 1,
                      autoWidth: true,
                      width: "100%",
                      arrows: false,
                      pagination: false,
                      gap: "30px",
                      breakpoints: {
                        862: {
                          arrows: true,
                        },
                      },
                    }}
                  >
                    {E__BOOK__FILTERS.category.map((elem, idx) => {
                      return (
                        <SplideSlide key={"e-cat" + idx}>
                          <p
                            onClick={() => clickHandler(2, elem)}
                            className={`${
                              categoryBook === elem ? "active-cat" : ""
                            }`}
                          >
                            {elem}
                          </p>
                        </SplideSlide>
                      );
                    })}
                  </Splide>
                  <Splide
                    options={{
                      drag: "free",
                      perMove: 1,
                      autoWidth: true,
                      width: "100%",
                      arrows: true,
                      pagination: false,
                      gap: "30px",
                    }}
                  >
                    {E__BOOK__FILTERS.topics.map((elem, idx) => {
                      return (
                        <SplideSlide key={"e-topics" + idx}>
                          <p
                            onClick={() => clickHandler(6, elem)}
                            className={`${topics === elem ? "active-cat" : ""}`}
                          >
                            {elem}
                          </p>
                        </SplideSlide>
                      );
                    })}
                  </Splide>
                </>
              )}
            </>
          )}
        </div>
        <div className="book-head">
          <h1>課外讀物</h1>
          <Form.Group>
            <Form.Select>
              <option>依熱門程度排序</option>
              <option>依熱門程度排序</option>
              <option>依熱門程度排序</option>
            </Form.Select>
          </Form.Group>
        </div>
        <div className="cards-grid">
          {BOOKS.map((elem, idx) => {
            return <BookCard {...elem} key={"cat-book" + idx} />;
          })}
        </div>
        <Pagination />
      </Container>
    </div>
  );
};

export default Classification;
