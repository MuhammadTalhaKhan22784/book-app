import "./styles/AboutUs.css";
//Components
import Hero from "./Hero";
import Story from "./Story";
import Contact from "./Contact";

const AboutCard = ({ head, img, desc, color }) => {
  return (
    <div className="about-card" style={{ backgroundColor: color }}>
      <h2>{head}</h2>
      <p>{desc}</p>
      <img src={img} alt="" />
    </div>
  );
};

const AboutUs = () => {
  const CARD_DATA = [
    {
      head: "貼近孩子",
      desc: "簡易說明簡易說明簡易說明簡易說明簡易說明簡易說明",
      img: "/Assets/about/card1.png",
      color: "#92c66a",
    },
    {
      head: "完善教育",
      desc: "簡易說明簡易說明簡易說明簡易說明簡易說明簡易說明",
      img: "/Assets/about/card2.png",
      color: "#FF8956",
    },
    {
      head: "快樂學習",
      desc: "簡易說明簡易說明簡易說明簡易說明簡易說明簡易說明",
      img: "/Assets/about/card3.png",
      color: "#13C2C2",
    },
    {
      head: "培養專長",
      desc: "簡易說明簡易說明簡易說明簡易說明簡易說明簡易說明",
      img: "/Assets/about/card4.png",
      color: "#FDB531",
    },
  ];
  return (
    <div className="about-us">
      <Hero />
      <div className="about-card-row">
        {CARD_DATA.map((elem, idx) => {
          return <AboutCard {...elem} key={"about-card" + idx} />;
        })}
      </div>
      <div className="about-wrapper">
        <Story />
        <Contact />
        <img src="/Assets/about/book.svg" className="book-abs" alt="" />
        <img src="/Assets/about/trophy.svg" className="trophy-abs" alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
