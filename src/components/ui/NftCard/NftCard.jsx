import React from "react";
import { Link } from "react-router-dom";
import creatorImg from "../../../assets/images/ava-01.png";

import "./nftCard.css";

const NftCard = (props) => {
  const { id, title, name, image, base } = props.item;

  // const [showModal, setShowModal] = useState(false);

  return (
    <div className="single__nft__card">
      <div className="nft__img">
        <img src={image} alt="" className="w-100" />
      </div>

      <div className="nft__content">
        <h5 className="nft__title">
          <Link to={`/market/${id}`}>{title}</Link>
        </h5>

        <div className="creator__info-wrapper d-flex gap-3">
          <div className="creator__img">
            <img src={creatorImg} alt="" className="w-100" />
          </div>

          <div className="creator__info w-100 d-flex align-items-center justify-content-between">
            <div>
              <h6>Created By</h6>
              <p>{name}</p>
            </div>

            <div>
              <h6>Floor Price</h6>
              <p>{base} ANC</p>
            </div>
          </div>
        </div>

        <div className=" mt-3 d-flex align-items-center justify-content-center">
          <Link to={`/market/${id}`}>
            <button
              className="bid__btn d-flex align-items-center gap-1"
              // onClick={() => setShowModal(true)}
            >
              <i className="ri-shopping-bag-line"></i> Buy Now
            </button>
          </Link>

          {/* {showModal && <Modal setShowModal={setShowModal} />} */}
        </div>
      </div>
    </div>
  );
};

export default NftCard;
