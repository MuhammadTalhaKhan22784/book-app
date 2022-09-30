import { Link } from "react-router-dom";
import "./styles/Thanks.css";
const Thanks = () => {
  return (
    <div className="thanks">
      <img src="/Assets/thanks.png" alt="" />
      <h2>你的訂單已完成</h2>
      <p>謝謝你的購買，你可以到購買紀錄追蹤實體書的配送進度。</p>
      <Link className="cta-btn" to={"/"}>
        繼續購物
      </Link>
    </div>
  );
};

export default Thanks;
