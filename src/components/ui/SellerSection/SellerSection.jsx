import React from "react";
import "./sellerSection.css";
import { Container, Row, Col } from "reactstrap";
import { SELLER__DATA } from "../../../assets/data/data";
import { DONOR__DATA } from "../../../assets/data/data";
import { INFO__DATA } from "../../../assets/data/data";
import { DESIGN__DATA } from "../../../assets/data/data";

const SellerSection = () => {
  return (
    <section className="section">
      <Container className="top-ppl">
        <Row className="d-flex align-items-center justify-content-center">
          <Col lg="12" className="mb-5">
            <div className="seller__section-title">
              <h3 style={{ textAlign: "center" }}>Top Adopters</h3>
            </div>
          </Col>

          {SELLER__DATA.map((item) => (
            <Col lg="2" md="3" sm="4" xs="6" key={item.id} className="mb-4">
              <div className="single__seller-card d-flex align-items-center gap-3">
                <div className="seller__img">
                  <img src={item.sellerImg} alt="" className="w-100" />
                </div>

                <div className="seller__content">
                  <h6>{item.sellerName}</h6>
                  <h6>{item.currentBid}</h6>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="d-flex align-items-center justify-content-center">
          <Col lg="12" className="mb-5">
            <div className="seller__section-title">
              <h3 style={{ textAlign: "center" }}>Top Donors</h3>
            </div>
          </Col>

          {DONOR__DATA.map((item) => (
            <Col lg="2" md="3" sm="4" xs="6" key={item.id} className="mb-4">
              <div className="single__seller-card d-flex align-items-center gap-3">
                <div className="seller__img">
                  <img src={item.sellerImg} alt="" className="w-100" />
                </div>

                <div className="seller__content">
                  <h6>{item.sellerName}</h6>
                  <h6>{item.currentBid} ETH</h6>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="d-flex align-items-center justify-content-center">
          <Col lg="12" className="mb-5">
            <div className="seller__section-title">
              <h3 style={{ textAlign: "center" }}>Top Contributors</h3>
            </div>
          </Col>

          {INFO__DATA.map((item) => (
            <Col lg="2" md="3" sm="4" xs="6" key={item.id} className="mb-4">
              <div className="single__seller-card d-flex align-items-center gap-3">
                <div className="seller__img">
                  <img src={item.sellerImg} alt="" className="w-100" />
                </div>

                <div className="seller__content">
                  <h6>{item.sellerName}</h6>
                  <h6>{item.currentBid}</h6>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="d-flex align-items-center justify-content-center">
          <Col lg="12" className="mb-5">
            <div className="seller__section-title">
              <h3 style={{ textAlign: "center" }}>Top Designers</h3>
            </div>
          </Col>

          {DESIGN__DATA.map((item) => (
            <Col lg="2" md="3" sm="4" xs="6" key={item.id} className="mb-4">
              <div className="single__seller-card d-flex align-items-center gap-3">
                <div className="seller__img">
                  <img src={item.sellerImg} alt="" className="w-100" />
                </div>

                <div className="seller__content">
                  <h6>{item.sellerName}</h6>
                  <h6>{item.currentBid}</h6>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SellerSection;
