import React, { useState, useEffect } from "react";
import CommonSection from "../components/ui/CommonSection/CommonSection";
import DonateCard from "../components/ui/DonateCard/DonateCard";
import { DonateData } from "../assets/data/donatedata.js";
import { Container, Row, Col } from "reactstrap";
import "../styles/market.css";
import { onValue, ref } from "firebase/database";
import { db } from "../firebase";

const DonatePage = () => {
  // const [data, setData] = useState(DonateData);
  const handleCategory = () => {};
  const handleItems = () => {};

  const [reload, setReload] = useState(true);
  const [formData, setFormData] = useState([]);
  if (formData === []) {
    setReload(false);
  }
  useEffect(() => {
    onValue(ref(db, "/nft/"), (snapshot) => {
      const data = snapshot.val();
      setFormData(data);
    });
    console.log(formData);
  }, [reload, formData]);

  // const handleSort = (e) => {
  //   const filterValue = e.target.value;

  //   if (filterValue === "high") {
  //     const filterData = DonateData.filter((item) => item.currentBid >= 6);

  //     //setData(filterData);
  //   }

  //   if (filterValue === "mid") {
  //     const filterData = DonateData.filter(
  //       (item) => item.currentBid >= 5.5 && item.currentBid < 6
  //     );

  //     setData(filterData);
  //   }

  //   if (filterValue === "low") {
  //     const filterData = DonateData.filter(
  //       (item) => item.currentBid >= 4.89 && item.currentBid < 5.5
  //     );

  //     setData(filterData);
  //   }
  // };
  return (
    <>
      <CommonSection
        title={"Donate for Endangered Animals By buying cool NFTs"}
      />

      <section>
        <Container>
          <Row>
            <Col lg="12" classnameName="mb-5">
              <div classnameName="market__product__filter d-flex align-items-center justify-content-between">
                <div classnameName="filter__left d-flex align-items-center gap-5">
                  <div classnameName="all__category__filter">
                    <select onChange={handleCategory}>
                      <option>All Categories</option>
                      <option value="art">Art</option>
                      <option value="music">Music</option>
                      <option value="domain-name">Domain Name</option>
                      <option value="virtual-world">Virtual World</option>
                      <option value="trending-card">Trending Cards</option>
                    </select>
                  </div>

                  <div classnameName="all__items__filter">
                    <select onChange={handleItems}>
                      <option>All Items</option>
                      <option value="single-item">Single Item</option>
                      <option value="bundle">Bundle</option>
                    </select>
                  </div>
                </div>

                <div classnameName="filter__right">
                  <select>
                    <option>Sort By</option>
                    <option value="high">High Rate</option>
                    <option value="mid">Mid Rate</option>
                    <option value="low">Low Rate</option>
                  </select>
                </div>
              </div>
            </Col>

            {DonateData?.map((item) => (
              <Col lg="3" md="4" sm="6" classnameName="mb-4" key={item.id}>
                <DonateCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DonatePage;
