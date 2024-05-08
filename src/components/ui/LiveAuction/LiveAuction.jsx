import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import { onValue, ref } from "firebase/database";
import { db } from "../../../firebase";

import NftCard from "../NftCard/NftCard";

import "./liveAuction.css";

const LiveAuction = () => {
  const [reload, setReload] = useState(true);
  const [formData, setFormData] = useState([]);
  if (formData === []) {
    setReload(false);
  }
   useEffect(() => {
     onValue(ref(db , '/nft/'),(snapshot)=>{
       const data = snapshot.val();
       setFormData(data);
     });
     // console.log(formData);
   }, [reload , formData]);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="live__auction__top d-flex align-items-center justify-content-between ">
              <h3>Our NFT Collections</h3>
              <span>
                <Link to="/market">Explore more</Link>
              </span>
            </div>
          </Col>

          {formData.slice(4, 8).map((item) => (
            <Col lg="3" md="4" sm="6" className="mb-4">
              <NftCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default LiveAuction;
