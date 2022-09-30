import "./styles/Hero.css";

import React from "react";

const PlanBox = ({ head, span, desc, btn }) => {
  return (
    <div className="plan-box">
      <h2>
        {head} <span>| {span}</span>
      </h2>
      <p>{desc}</p>
      <button className="cta-btn">{btn}</button>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="sub-hero">
      <div className="sub-chat-head">
        <h1>給孩子最好的，訂閱後即可擁有這些！</h1>
      </div>
      <div className="flex">
        <img src="/Assets/subscription/hero1.svg" alt="" />
        <h2>
          全台灣最完整 <br /> <span>數位知識庫</span>
        </h2>
        <img src="/Assets/subscription/hero2.svg" alt="" />
      </div>
      <p className="hero-desc">
        訂閱優點說明訂閱優點說明訂閱優點說明訂閱優點說明訂閱優點說明訂閱優點說明訂閱優點說明訂閱優點說明訂閱優點說明訂閱優點說明訂閱優點說明訂閱優點說明訂閱優點說明訂閱優點說明訂閱優點說明訂閱優點說明訂閱優點說明訂閱優點說明訂閱優點說明訂閱優點說明訂閱優點說明訂閱優點說明。
        <br />
        訂閱優點說明訂閱優點說明訂閱優點說明訂閱優點說明訂閱優點說明訂閱優點說明訂閱優點說明訂閱優點說明訂閱優點說明訂閱優點說明訂閱優點說明。
      </p>

      <div className="plans-row">
        <img src="/Assets/subscription/hat.png" alt="" className="hat" />
        <PlanBox
          head={"NT$88"}
          span={"每月"}
          btn={"訂閱標準月費"}
          desc={"訂閱後將自動扣款。"}
        />
        <PlanBox
          head={"NT$888"}
          span={"每年"}
          btn={"訂閱標準年費"}
          desc={"節省約15%。訂閱後將自動扣款。"}
        />
      </div>
    </div>
  );
};

export default Hero;
