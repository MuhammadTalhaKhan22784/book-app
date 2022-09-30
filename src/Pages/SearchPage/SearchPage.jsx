import "./SearchPage.css";
//BOOTSTRAP ------------------------
import { Container, Form } from "react-bootstrap";
//Components
import BookCard from "../../Components/BookCard/BookCard";
import Pagination from "../../Components/Pagination/Pagination";

const SearchPage = () => {
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
  return (
    <div className="book-category search-page">
      <Container fluid>
        <div className="book-head">
          <h1>搜尋結果</h1>
          <Form.Group>
            <Form.Select>
              <option>依發表日期排序</option>
              <option>依發表日期排序</option>
              <option>依發表日期排序</option>
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

export default SearchPage;
