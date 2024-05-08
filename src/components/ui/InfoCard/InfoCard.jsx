import React from "react";
import "./infoCard.css";
import { NavLink } from "react-router-dom";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

export default function InfoCard({ id, image, heading, info, target }) {
  return (
    <MDBCard className="info-card">
      {/* <div className='info-card'> */}
      <MDBRow className="g-1">
        {id % 2 === 0 ? (
          <>
            <MDBCol md="4">
              <MDBCardImage
                style={{ height: "40vh", width: "55vw" }}
                src={image}
                alt="..."
                fluid
              />
            </MDBCol>
            <MDBCol md="8">
              <MDBCardBody>
                <MDBCardTitle className="heading">{heading}</MDBCardTitle>
                <MDBCardText>{info}</MDBCardText>
                <MDBCardText>
                  <NavLink to={target}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="xl bi bi-arrow-right-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                  </NavLink>
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </>
        ) : (
          <>
            <MDBCol md="8">
              <MDBCardBody>
                <MDBCardTitle className="heading">{heading}</MDBCardTitle>
                <MDBCardText>{info}</MDBCardText>
                <MDBCardText>
                  <NavLink to={target}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="xl bi bi-arrow-right-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                  </NavLink>
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
            <MDBCol md="4">
              <MDBCardImage
                style={{ height: "40vh", width: "55vw" }}
                src={image}
                alt="..."
                fluid
              />
            </MDBCol>
          </>
        )}
      </MDBRow>

      {/* </div> */}
    </MDBCard>
  );
}
