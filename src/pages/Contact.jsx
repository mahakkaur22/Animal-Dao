import React, { useRef } from "react";
import { useStateValue } from "../StateProvider";
import CommonSection from "../components/ui/CommonSection/CommonSection";
import { Container, Row, Col } from "reactstrap";

const Contact = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const subjectRef = useRef("");
  const messageRef = useRef("");
  const [{ address }] = useStateValue();
  console.log(address);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <CommonSection title="Provide Information about Stray Animals" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" className="m-auto text-center">
              <h2>Tell us about a new Animal we can help!!</h2>
              <p>
                Drop information about a stray animal you have seen and think we
                can help finding a new home!! Provide us detailed information
                about the animal like photos, breed etc.
              </p>
              <div className="contact mt-4">
                <form onSubmit={handleSubmit}>
                  <div className="form__input">
                    <input
                      type="text"
                      placeholder="Wallet Address"
                      ref={nameRef}
                      value={address}
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
                  <div className="form__input">
                    <input
                      type="text"
                      s
                      placeholder="Enter the breed of the animal"
                      ref={subjectRef}
                    />
                  </div>
                  <div className="form__input">
                    <textarea
                      rows="7"
                      placeholder="Describe the animal"
                      ref={messageRef}
                    ></textarea>
                  </div>
                  <div className="form__input">
                    {/* <label htmlFor="">Upload File</label> */}
                    <input type="file" className="upload__input" />
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
                    Send a Message
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
