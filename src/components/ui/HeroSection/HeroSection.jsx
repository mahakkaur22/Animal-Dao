import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./heroSection.css";
import HomeSwiper from "../HomeSwiper/HomeSwiper";

const HeroSection = () => {
  return (
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2>
                Have a heart, Do your part.
                <span>Save Animals</span>
              </h2>
              <p>
                The number of endangered animals is increasing, and the
                condition of stray animals is getting worse daily. So, we have
                made a community-driven DAO dApp for the welfare of the animals.
              </p>

              <div className="hero__btns d-flex align-items-center gap-4">
                <button className=" explore__btn d-flex align-items-center gap-2">
                  <i className="ri-rocket-line"></i>{" "}
                  <Link to="/market">Donate</Link>
                </button>
                <button className=" create__btn d-flex align-items-center gap-2">
                  <i className="ri-ball-pen-line"></i>
                  <Link to="/adopt">Adopt</Link>
                </button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="hero__img">
              <HomeSwiper />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
