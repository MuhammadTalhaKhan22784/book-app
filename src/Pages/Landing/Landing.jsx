import "./styles/Landing.css";
// Components --------------------
import Slider from "../../Components/Slider/Slider";
import Hero from "./Hero";
import HeroDetails from "./HeroDetails";

const Landing = () => {
  const SLIDER__DATA = [
    { heading: "熱門新書" },
    { heading: "閱讀排行榜" },
    { heading: "精選書籍" },
    { heading: "好評推薦" },
    { heading: "編輯推薦" },
  ];
  return (
    <div className="wrapper">
      <div className="landing">
        <Hero />
        <HeroDetails />
      </div>
      <div className="bg-purple">
        {SLIDER__DATA.map((elem, idx) => {
          return <Slider {...elem} key={"slider" + idx} />;
        })}
      </div>
    </div>
  );
};

export default Landing;
