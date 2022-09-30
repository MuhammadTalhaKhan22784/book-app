import "./styles/News.css";
// BOOTSTRAP -----------------------
import { Container, Form } from "react-bootstrap";
//Components
import NewsBox from "../../Components/NewsBox/NewsBox";
import Pagination from "../../Components/Pagination/Pagination";

const News = () => {
  const dummyData = [
    {
      img: "/Assets/news.png",
      date: "2022/05/31",
      head: "【高中部暑秋班劃位公告】",
      caption:
        "成立於1972年的克雷斯補習班，經營規模盛極一時。或許是企業週期使然，也許是大環境改變...",
    },
    {
      img: "/Assets/news.png",
      date: "2022/05/31",
      head: "【高中部暑秋班劃位公告】",
      caption:
        "成立於1972年的克雷斯補習班，經營規模盛極一時。或許是企業週期使然，也許是大環境改變...",
    },
    {
      img: "/Assets/news.png",
      date: "2022/05/31",
      head: "【高中部暑秋班劃位公告】",
      caption:
        "成立於1972年的克雷斯補習班，經營規模盛極一時。或許是企業週期使然，也許是大環境改變...",
    },
    {
      img: "/Assets/news.png",
      date: "2022/05/31",
      head: "【高中部暑秋班劃位公告】",
      caption:
        "成立於1972年的克雷斯補習班，經營規模盛極一時。或許是企業週期使然，也許是大環境改變...",
    },
    {
      img: "/Assets/news.png",
      date: "2022/05/31",
      head: "【高中部暑秋班劃位公告】",
      caption:
        "成立於1972年的克雷斯補習班，經營規模盛極一時。或許是企業週期使然，也許是大環境改變...",
    },
    {
      img: "/Assets/news.png",
      date: "2022/05/31",
      head: "【高中部暑秋班劃位公告】",
      caption:
        "成立於1972年的克雷斯補習班，經營規模盛極一時。或許是企業週期使然，也許是大環境改變...",
    },
  ];
  return (
    <div className="news">
      <Container fluid>
        <div className="top-news flex">
          <h2>最新消息</h2>
          <Form.Group>
            <Form.Select>
              <option>依發表日期排序</option>
            </Form.Select>
          </Form.Group>
        </div>
        <div className="news-grid">
          {dummyData.map((elem, idx) => {
            return <NewsBox {...elem} key={"news-box" + idx} />;
          })}
        </div>
        <Pagination />
      </Container>
    </div>
  );
};

export default News;
