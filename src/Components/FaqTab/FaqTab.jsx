import "./FaqTab.css";
import { useState } from "react";
//ICON LIBRARY ------------------
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FaqTab = ({ question, answer }) => {
  const [active, setActive] = useState(false);
  return (
    <div className={`faq-tab ${active ? "active-faq-tab" : ""}`}>
      <div
        onClick={() => {
          setActive((prev) => !prev);
        }}
        className={"faq-btn"}
      >
        <h2>{question}</h2>
        <FontAwesomeIcon icon={active ? faMinus : faPlus} />
      </div>
      <div className={`answer ${active ? "active-answer" : ""}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FaqTab;
