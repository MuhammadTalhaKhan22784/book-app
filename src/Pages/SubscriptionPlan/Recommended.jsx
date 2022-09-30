import "./styles/Recommended.css";

const ReviewBox = ({ img, name, desc, color }) => {
  return (
    <div className="review-box" style={{ backgroundColor: color }}>
      <img src={img} alt="" />
      <p>{desc}</p>
      <h6>{name}</h6>
    </div>
  );
};

const Recommended = () => {
  const DATA = [
    {
      img: "/Assets/subscription/card1.png",
      name: "劉媽媽",
      desc: "成立於1972年的克雷斯補習班，經營規模盛極一時。或許是企業週期使然，也許是大環境改變，成立於1972年的克雷斯補習班，經營經營規模盛極一時。或許是企業週期使然，也許是大環境改變。",
      color: "#92C66A",
    },
    {
      img: "/Assets/subscription/card2.png",
      name: "劉媽媽",
      desc: "成立於1972年的克雷斯補習班，經營規模盛極一時。或許是企業週期使然，也許是大環境改變，成立於1972年的克雷斯補習班，經營經營規模盛極一時。或許是企業週期使然，也許是大環境改變。",
      color: "#FF8956",
    },
    {
      img: "/Assets/subscription/card3.png",
      name: "劉媽媽",
      desc: "成立於1972年的克雷斯補習班，經營規模盛極一時。或許是企業週期使然，也許是大環境改變，成立於1972年的克雷斯補習班，經營經營規模盛極一時。或許是企業週期使然，也許是大環境改變。",
      color: "#13C2C2",
    },
    {
      img: "/Assets/subscription/card4.png",
      name: "劉媽媽",
      desc: "成立於1972年的克雷斯補習班，經營規模盛極一時。或許是企業週期使然，也許是大環境改變，成立於1972年的克雷斯補習班，經營經營規模盛極一時。或許是企業週期使然，也許是大環境改變。",
      color: "#FDB531",
    },
  ];
  return (
    <div className="recomend">
      <div className="h1-div">
        <h1>好評推薦</h1>
        <img src="/Assets/subscription/heading-bg.png" alt="" />
      </div>
      <div className="review-grid">
        {DATA.map((elem, idx) => {
          return <ReviewBox {...elem} key={"review" + idx} />;
        })}
      </div>
    </div>
  );
};

export default Recommended;
