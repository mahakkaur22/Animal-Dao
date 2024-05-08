import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/ui/CommonSection/CommonSection";
import NftCard from "../components/ui/NftCard/NftCard";
import avatar from "../assets/images/ava-01.png";
import { useStateValue } from "../StateProvider";
import axios from "axios";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import "../styles/create-item.css";

const Create = () => {
  const [{ address }] = useStateValue();
  const [selectedFile, setSelectedFile] = useState();
  // const [preview, setPreview] = useState();
  const [objUrl, setObjUrl] = useState(null);
  const [addTitle, setAddTitle] = useState();
  const [title, setTitle] = useState(null);

  const [addName, setAddName] = useState();
  const [name, setName] = useState(null);

  const [addDesc, setAddDesc] = useState();
  const [desc, setDesc] = useState(null);

  const [addPrice, setAddPrice] = useState();
  const [price, setPrice] = useState(null);

  useEffect(() => {
    if (!selectedFile) {
      // setPreview(undefined)
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    // setPreview(objectUrl)
    setObjUrl(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  useEffect(() => {
    if (!addTitle) {
      return;
    }
    setTitle(addTitle);
  }, [addTitle]);

  useEffect(() => {
    if (!addName) {
      return;
    }
    setName(addName);
  }, [addName]);

  useEffect(() => {
    if (!addDesc) {
      return;
    }
    setDesc(addDesc);
  }, [addDesc]);

  useEffect(() => {
    if (!addPrice) {
      return;
    }
    setPrice(addPrice);
  }, [addPrice]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    console.log(e.target.files[0]);
    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
    setFileImg(e.target.files[0]);
  };

  const onAddTitle = (e) => {
    if (!e.target.value || e.target.value.length === 0) {
      setAddTitle(undefined);
      return;
    }
    setAddTitle(e.target.value);
  };

  const onAddDesc = (e) => {
    if (!e.target.value || e.target.value.length === 0) {
      setAddDesc(undefined);
      return;
    }
    setAddDesc(e.target.value);
  };

  const onAddName = (e) => {
    if (!e.target.value || e.target.value.length === 0) {
      setAddName(undefined);
      return;
    }
    setAddName(e.target.value);
  };

  const onAddPrice = (e) => {
    if (!e.target.value || e.target.value.length === 0) {
      setAddPrice(undefined);
      return;
    }
    setAddPrice(e.target.value);
  };

  const item = {
    id: "01",
    title: title,
    desc: desc,
    imgUrl: objUrl,
    creator: name,
    creatorImg: avatar,
    currentBid: price,
  };

  const REACT_APP_PINATA_API_KEY = "c1c83af9816e0d9730ac";
  const REACT_APP_PINATA_API_SECRET =
    "6b0a89da575688da425a5ca6d4d97639b63b791d763bb837a072ac198f008c2d";

  const [fileImg, setFileImg] = useState(null);

  const sendFileToIPFS = async (e) => {
    e.preventDefault();
    if (fileImg) {
      try {
        const storage = getStorage();
        const storageRef = ref(storage, "some-child");

        uploadBytes(storageRef, fileImg).then((snapshot) => {
          console.log("Uploaded a blob or file!");
        });

        getDownloadURL(ref(storage, `images/${fileImg.name}`)).then((url) => {
          console.log(url);
        });

        const formData = new FormData();
        formData.append("file", fileImg);

        console.log(formData);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `${REACT_APP_PINATA_API_KEY}`,
            pinata_secret_api_key: `${REACT_APP_PINATA_API_SECRET}`,
            "Content-Type": "multipart/form-data",
          },
        });

        const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
        console.log(ImgHash);
        e.preventDefault();

        const data = new FormData(e.target);
        const value = Object.fromEntries(data.entries());
        //value.imgLink = ImgHash;
        console.log(JSON.stringify(value));
      } catch (error) {
        console.log("Error sending File to IPFS: ");
        console.log(error);
      }
    }
  };

  return (
    <>
      <CommonSection title="Donate your Design" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="4" sm="6">
              <h5 className="mb-4 text-light">Preview Item</h5>
              <NftCard item={item} />
            </Col>

            <Col lg="9" md="8" sm="6">
              <div className="create__item">
                <form onSubmit={sendFileToIPFS}>
                  <div className="form__input">
                    <label htmlFor="">Wallet Address</label>
                    <input
                      type="text"
                      name="owner"
                      placeholder="Wallet Address"
                      value={address}
                      disabled
                    />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Upload File</label>
                    {/* <input type="file" className="upload__input" /> */}
                    <input
                      type="file"
                      className="upload__input"
                      onChange={onSelectFile}
                    />
                  </div>
                  <div className="form__input">
                    <label htmlFor="">Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      onChange={onAddName}
                      name="name"
                    />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Price</label>
                    <input
                      type="number"
                      placeholder="Enter price for one item"
                      onChange={onAddPrice}
                      name="price"
                    />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Title</label>
                    <input
                      type="text"
                      placeholder="Enter title"
                      onChange={onAddTitle}
                      name="title"
                    />
                  </div>

                  <div className="animalType">
                    <span className="span-type">
                      <label htmlFor="">Tiger</label>
                      <input
                        type="radio"
                        placeholder="Enter title"
                        name="type"
                        value="animal1"
                      />
                    </span>
                    <span className="span-type">
                      <label htmlFor="">Turtle</label>
                      <input
                        type="radio"
                        placeholder="Enter title"
                        name="type"
                        value="animal2"
                      />
                    </span>
                    <span className="span-type">
                      <label htmlFor="">Whale</label>
                      <input
                        type="radio"
                        placeholder="Enter title"
                        name="type"
                        value="animal3"
                      />
                    </span>
                    <span className="span-type">
                      <label htmlFor="">Rhino</label>
                      <input
                        type="radio"
                        placeholder="Enter title"
                        name="type"
                        value="animal4"
                      />
                    </span>
                    <span className="span-type">
                      <label htmlFor="">Black Footed Ferret</label>
                      <input
                        type="radio"
                        placeholder="Enter title"
                        name="type"
                        value="animal5"
                      />
                    </span>
                    <span className="span-type">
                      <label htmlFor="">Dolphin</label>
                      <input
                        type="radio"
                        placeholder="Enter title"
                        name="type"
                        value="animal6s"
                      />
                    </span>
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Description</label>
                    <textarea
                      name="desc"
                      id=""
                      rows="7"
                      placeholder="Enter description"
                      className="w-100"
                      onChange={onAddDesc}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-success">
                    Mint NFT
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

export default Create;
