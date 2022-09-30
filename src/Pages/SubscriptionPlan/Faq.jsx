import "./styles/Faq.css";
//Components
import FaqTab from "../../Components/FaqTab/FaqTab";

const Faq = () => {
  const DATA = [
    {
      question: "訂閱月費會自動扣繳嗎？",
      answer:
        "你能瀏覽全站訂閱即可觀看的書籍，總數超過1000本。你能瀏覽全站訂閱即可觀看的書籍，總數超過1000本。你能瀏覽全站訂閱即可觀看的書籍，總數超過1000本。你能瀏覽全站訂閱即可觀看的書籍，總數超過1000本。",
    },
    {
      question: "身為訂閱會員，我能看的書籍有哪些？",
      answer:
        "你能瀏覽全站訂閱即可觀看的書籍，總數超過1000本。你能瀏覽全站訂閱即可觀看的書籍，總數超過1000本。你能瀏覽全站訂閱即可觀看的書籍，總數超過1000本。你能瀏覽全站訂閱即可觀看的書籍，總數超過1000本。",
    },
    {
      question: "身為訂閱會員，我能看的書籍有哪些？",
      answer:
        "你能瀏覽全站訂閱即可觀看的書籍，總數超過1000本。你能瀏覽全站訂閱即可觀看的書籍，總數超過1000本。你能瀏覽全站訂閱即可觀看的書籍，總數超過1000本。你能瀏覽全站訂閱即可觀看的書籍，總數超過1000本。",
    },
  ];
  return (
    <div className="faq">
      <h1>常見問題</h1>
      <div className="faq-elements">
        {DATA.map((elem, idx) => {
          return <FaqTab {...elem} key={"faq-tab" + idx} />;
        })}
      </div>
    </div>
  );
};

export default Faq;
