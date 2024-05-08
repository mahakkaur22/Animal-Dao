import React from "react";
import { Link } from "react-router-dom";
import "../NftCard/nftCard.css";

const DonateCard = (props) => {
  const { id, title, creator, imgUrl, currentBid } = props.item;

  // const [showModal, setShowModal] = useState(false);
  return (
    <div className="single__nft__card">
      <div className="nft__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="nft__content">
        <h5 className="nft__title">
          <Link to={`/donate/${id}`}>{title}</Link>
        </h5>

        <div className="creator__info-wrapper d-flex gap-3">
          <div className="creator__info w-100 d-flex align-items-center justify-content-between">
            <div>
              <h6>Donated To</h6>
              <p className="CreatorName">{creator}</p>
            </div>

            <div>
              <h6>Floor Price</h6>
              <p>{currentBid} Sol</p>
            </div>
          </div>
        </div>

        <div className=" mt-3 d-flex align-items-center justify-content-center">
          <Link to={`/donate`}>
            <button
              className="bid__btn d-flex align-items-center gap-1"
              // onClick={() => setShowModal(true)}
            >
              <i className="ri-shopping-bag-line"></i> Donate Now
            </button>
          </Link>

          {/* {showModal && <Modal setShowModal={setShowModal} />} */}
        </div>
      </div>
    </div>
  );
};

export default DonateCard;
