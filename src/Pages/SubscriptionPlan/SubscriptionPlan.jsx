import "./styles/SubscriptionPlan.css";
//BOOTSTRAP --------------------------------
import { Container } from "react-bootstrap";
import Hero from "./Hero";
import Recommended from "./Recommended";
import Device from "./Device";
import Faq from "./Faq";

const SubscriptionPlan = () => {
  return (
    <>
      <div className="subscription">
        <Container fluid>
          <Hero />
          <Recommended />
        </Container>
      </div>
      <div className="device-cont">
        <Device />
      </div>
      <div className="subscription">
        <Container fluid>
          <Faq />
        </Container>
      </div>
    </>
  );
};

export default SubscriptionPlan;
