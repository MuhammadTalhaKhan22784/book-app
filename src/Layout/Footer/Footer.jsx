import "./Footer.css";
// ICON LIB ---------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
// BOOTSTRAP--------------------
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="foot-wrap">
      <Container className="foot-cont">
        <Row>
          <Col xs={12} lg="auto">
            <div className="foot-div">
              <h1>關於我們</h1>
              <p>
                成立於1972年的克雷斯補習班，經營規模盛極一時。或許是企業週期使然，也許是大環境改變，老克雷斯補習班面臨前所未有的低潮。
                於是創辦人之一的黃翊蓁老師找到我，想請我繼續經營下去，讓這老字號能夠風華再現。
              </p>
            </div>
          </Col>
          <Col xs={12} lg="auto">
            <div className="foot-div">
              <h1>聯絡資訊</h1>
              <p>
                電話：0913-412-423 <br /> 電話：(02) 1232-4123 <br />{" "}
                skype：class21321 <br />
                Line：@class21321 <br /> Email：class21321.info@gmail.com
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="bg-purple-dark">
        <Container>
          <Row>
            <div className="bot-foot">
              <FontAwesomeIcon
                onClick={() => window.scrollTo(0, 0)}
                icon={faArrowUp}
                className="up-arrow"
              />
              <p>Copyright 2022 Class All Rights Reserved.</p>
              <div className="social-div">
                <a href="#">
                  <img src="/Assets/line.svg" alt="" />
                </a>
                <a href="#">
                  <img src="/Assets/fb.svg" alt="" />
                </a>
                <a href="#">
                  <img src="/Assets/ig.svg" alt="" />
                </a>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
