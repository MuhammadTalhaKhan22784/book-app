import "./styles/HeroDetails.css";
// BOOTSTRAP ------------------------
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HeroDetails = () => {
  const DETAILS = [
    {
      img: "/Assets/landing/bulb.svg",
      head: "題目搭配解析",
      desc: "培養您孩子養成資優生思考體質，並協助他們的閱讀理解成長，請相信真中打滾教育界50年的專家",
    },
    {
      img: "/Assets/landing/present.svg",
      head: "支援跨平台閱讀",
      desc: "培養您孩子養成資優生思考體質，並協助他們的閱讀理解成長，請相信真中打滾教育界50年的專家",
    },
    {
      img: "/Assets/landing/grade.svg",
      head: "紀錄讀書進度",
      desc: "培養您孩子養成資優生思考體質，並協助他們的閱讀理解成長，請相信真中打滾教育界50年的專家",
    },
  ];
  return (
    <div className="second">
      <Container>
        <Row>
          {DETAILS.map((elem, idx) => {
            return (
              <Col key={"detail" + idx} xs={12} lg={4}>
                <div className="box">
                  <img src={elem.img} alt="" />
                  <h2>{elem.head}</h2>
                  <p>{elem.desc}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default HeroDetails;
