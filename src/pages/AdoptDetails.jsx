import React, { useRef, useState, useEffect } from "react";
import CommonSection from "../components/ui/CommonSection/CommonSection";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
// import { ADOPT__DATA } from "../assets/data/data";
import { onValue, ref } from "firebase/database";
import { db } from "../firebase";
import creatorImg from "../assets/images/ava-01.png";

import "../styles/nft-details.css";

const AdoptDetails = () => {
  const { id } = useParams();

  // const singleNft = ADOPT__DATA.find((item) => item.id === id);

  //Form for adoption
  const nameRef = useRef("");
  const emailRef = useRef("");
  const subjectRef = useRef("");
  // const messageRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [reload, setReload] = useState(true);
  const [singleFormData, setFormData] = useState([]);
  if (singleFormData === []) {
    setReload(false);
  }
  useEffect(() => {
    onValue(ref(db, `/adopt/${id - 1}`), (snapshot) => {
      const data = snapshot.val();
      setFormData(data);
      // console.log(singleFormData);
    });
  }, [reload, id, singleFormData]);

  return (
    <>
      <CommonSection title={singleFormData.title} />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <img
                src={singleFormData.image}
                alt=""
                className="w-100 single__nft-img"
              />
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="single__nft__content">
                <h2>{singleFormData.title}</h2>

                <div className=" d-flex align-items-center justify-content-between mt-4 mb-4">
                  <div className=" d-flex align-items-center gap-4 single__nft-seen">
                    <span>
                      <i className="ri-eye-line"></i> 234
                    </span>
                    <span>
                      <i className="ri-heart-line"></i> 123
                    </span>
                  </div>

                  <div className=" d-flex align-items-center gap-2 single__nft-more">
                    <span>
                      <i className="ri-send-plane-line"></i>
                    </span>
                    <span>
                      <i className="ri-more-2-line"></i>
                    </span>
                  </div>
                </div>

                <div className="nft__creator d-flex gap-3 align-items-center">
                  <div className="creator__img">
                    <img src={creatorImg} alt="" className="w-100" />
                  </div>

                  <div className="creator__detail">
                    <p>Created By</p>
                    <h6>{singleFormData.name}</h6>
                  </div>
                </div>

                <p className="my-4 ">{singleFormData.description}</p>
                {/* <button className="singleNft-btn d-flex align-items-center gap-2 w-100">
                  <i class="ri-shopping-bag-line"></i>
                  <Link to="/wallet">Buy now</Link>
                </button> */}
              </div>
            </Col>
          </Row>

          {/* Adopt form started */}
          <Row className="mt-5">
            <Col lg="6" md="6" className="m-auto text-center">
              <h2>Tell us about yourself!!</h2>
              <p>
                Drop information about you so that you can adopt this animal as
                your pet.
              </p>
              <div className="contact mt-4">
                <form onSubmit={handleSubmit}>
                  <div className="form__input">
                    <input
                      type="text"
                      placeholder="Wallet Address"
                      ref={nameRef}
                      value="0x0000000000000000000000000000000000000000"
                      disabled
                    />
                  </div>
                  <div className="form__input">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      ref={nameRef}
                    />
                  </div>
                  <div className="form__input">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      ref={emailRef}
                    />
                  </div>
                  <div className="form__input">
                    <input
                      type="text"
                      placeholder="Enter you mobile number"
                      ref={subjectRef}
                    />
                  </div>
                  <div className="form__input">
                    <input
                      type="text"
                      placeholder="Enter the location"
                      ref={subjectRef}
                    />
                  </div>

                  <button
                    className="send__btn"
                    style={{
                      border: "none",
                      padding: "7px 25px",
                      borderRadius: "5px",
                      marginTop: "20px",
                    }}
                  >
                    Adopt
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <LiveAuction /> */}
    </>
  );
};

export default AdoptDetails;
