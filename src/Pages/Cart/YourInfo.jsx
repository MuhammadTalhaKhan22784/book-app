import "./styles/YourInfo.css";
//BOOTSTRAP -------------------------
import Form from "react-bootstrap/Form";
import { Row, Col, Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
//REACT ROUTER DOM -----------------------
import { Link } from "react-router-dom";

const YourInfo = () => {
  return (
    <div className="your-info">
      <Container fluid>
        <Form.Group>
          <Form.Label>
            <span>*</span>配送方式
          </Form.Label>
          <Form.Select placeholder="請選擇配送方式">
            <option>請選擇配送方式</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            <span>*</span>付款方式
          </Form.Label>
          <Form.Select>
            <option>請選擇付款方式</option>
          </Form.Select>
        </Form.Group>
        <h2>訂購人資訊</h2>
        <Form.Group>
          <Form.Label>
            <span>*</span>訂購人姓名
          </Form.Label>
          <Form.Control placeholder="請填入訂購人姓名" />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            <span>*</span>Email
          </Form.Label>
          <Form.Control placeholder="請填入Email" />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            <span>*</span>聯絡電話
          </Form.Label>
          <Form.Control placeholder="請填入聯絡電話" />
        </Form.Group>
        <div className="flex">
          <h2>收件人資訊</h2>
          <Form.Group>
            <Form.Check type="checkbox" label="同訂購人資訊" />
          </Form.Group>
        </div>
        <Form.Group>
          <Form.Label>
            {" "}
            <span>*</span>收件人姓名
          </Form.Label>
          <Form.Control placeholder="請填入收件人姓名" />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            {" "}
            <span>*</span>Email
          </Form.Label>
          <Form.Control placeholder="請填入Email" />
        </Form.Group>
        <Row>
          <Form.Label>
            {" "}
            <span>*</span>收件地址
          </Form.Label>
          <Col xs={12} md={3}>
            <Form.Group>
              <Form.Select>
                <option>請選擇縣市</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group>
              <Form.Select>
                <option>請選擇鄉鎮</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group>
              <Form.Control placeholder="詳細地址" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group>
          <Form.Label>
            {" "}
            <span>*</span>聯絡電話
          </Form.Label>
          <Form.Control placeholder="請填入聯絡電話" />
        </Form.Group>
        <h3>
          {" "}
          <span>*</span>發票開立方式
        </h3>
        <Form.Group className="flex2">
          <Form.Check type="radio" label="紙本發票" />
          <Form.Check type="radio" label="電子發票" />
        </Form.Group>
        <h2>你的訂單</h2>
        <ListGroup>
          <ListGroup.Item>
            <div className="flex">
              <h4>商品</h4>
              <h4>小計</h4>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="flex">
              <p>商品</p>
              <p>＄60</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <div className="flex">
              <p>應用國文</p>
              <p>＄60</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <div className="flex small-item">
              <p>小計</p>
              <p>＄120</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <div className="flex small-item">
              <p>總計</p>
              <p>＄120</p>
            </div>
          </ListGroup.Item>
        </ListGroup>
        <p className="note">
          我們會使用你的個人資料來處理你的訂單、支援你在本網站中的使用體驗，以及用於
          <span>隱私權政策</span>中說明的其他用途。
        </p>
        <div className="btn-div-info">
          <Link to={"/cart"} className="cta-inverse">
            上一步
          </Link>
          <Link to={"/cart/thanks"} className="cta-btn">
            付款結帳
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default YourInfo;
