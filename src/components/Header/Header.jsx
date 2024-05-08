import React, { useRef, useEffect, useState } from "react";
import "./header.css";
import { Container } from "reactstrap";
import { ethers } from "ethers";
// import useMetaMask from '../../hooks/useMetaMask';
// import { Web3Modal } from '@web3modal/react'
// import { Web3Button, useAccount } from '@web3modal/react'

// import { WalletContext } from "../../context/WalletContext";
import logoImg from "../../assets/images/1.png";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";
// import { useStateValue } from "../../StateProvider";
// import Connect2Phantom from "../ui/Connect2Phantom.tsx";

const NAV__LINKS = [
  {
    display: "Home",
    url: "/home",
  },
  {
    display: "Marketplace",
    url: "/market",
  },
  {
    display: "Adopt",
    url: "/adopt",
  },
  {
    display: "Donate",
    url: "/donate",
  },
  {
    display: "Design",
    url: "/create",
  },
  {
    display: "Leads",
    url: "/contact",
  },
  // {
  //   display: "Whitepaper",
  //   url: "https://docs.google.com/document/d/1mCpw7SQ1FIN1BiW9scCuJSZf7w9i3yxKiYV1w9xEczs/edit?usp=sharing",
  // },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  // const [dispatch] = useStateValue();

  // const [data, setdata] = useState({
  //   address: ' ',
  //   Balance: null,
  // });

  const [currentAccount, setAccount] = useState("");
  const [balance, setBalance] = useState("");
  const [walletAddress, setWalletAddress] = useState(null);

  const btnhandler = () => {
    // Asking if phantom is already present or not
    window.onload = async function (){
      try {
        if(window.solana)
        {
          const solana = window.solana
          if (solana.isPhantom)
          {
            console.log('Phantom wallet found!')
            const res = await solana.connect({onlyIftrusted: true})
            console.log('connected with Public Key:', res.publicKey.toString())
            setWalletAddress(res.publicKey.toString())
          }
        }
          else{
            alert('Wallet not found! Get a phantom Wallet')
        }
      
      } catch (error) {
        console.log(error);
      }
       
    console.log("connected");
    }
  };

  // const getbalance = (address) => {
  //   window.ethereum
  //     .request({
  //       method: "eth_getBalance",
  //       params: [address, "latest"],
  //     })
  //     .then((balance) => {
  //       setBalance(ethers.utils.formatEther(balance));
  //     });
  // };

  // const accountChangeHandler = (account) => {
  //   setAccount(account);
  //   getbalance(account);
  // };

  // const disconnectAccount = () => {
  //   swal({
  //     title: "Are you sure?",
  //     text: "You will be logged out of your Metamask wallet",
  //     icon: "warning",
  //     buttons: true,
  //     dangerMode: true,
  //   }).then((willDelete) => {
  //     if (willDelete) {
  //       swal("You have been Logged Out!", {
  //         icon: "success",
  //       });
  //       setAccount("");
  //     }
  //   });
  // };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  // const truncate = (input) =>
  //       input?.length > 30 ? `${input.substring(0, 6)}...` : input;

  const toggleMenu = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="navigation">
          <div className="logo">
            <h4 className="d-flex gap-2 align-items-center ">
              <span>
                {/* <i class="ri-fire-fill"></i> */}
                <img src={logoImg} className="logoImg" alt="logoImg" />
              </span>
              AnimalCareDAO
            </h4>
          </div>

          <div className="nav__menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="nav__list">
              {NAV__LINKS.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink
                    to={item.url}
                    className={(navclass) =>
                      navclass.isActive ? "active" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
              <li className="nav__item">
                <a
                  href="https://docs.google.com/document/d/1mCpw7SQ1FIN1BiW9scCuJSZf7w9i3yxKiYV1w9xEczs/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Whitepaper
                </a>
              </li>
            </ul>
          </div>

          <div className="nav__right d-flex align-items-center gap-5 ">
            {currentAccount !== "" ? (
              <button
                className="btn d-flex gap-2 align-items-center "
                onClick={disconnectAccount}
              >
                <span>
                  <i className="ri-wallet-line"></i>
                </span>
                <span className="wltCntText">
                  {currentAccount.slice(0, 10) + "..."}
                </span>
              </button>
            ) : (
              <button
                className="btn d-flex gap-2 align-items-center"
                onClick={btnhandler}
              >
                <span>
                  <i className="ri-wallet-line"></i>
                </span>
                <span className="wltCntText">Connect Wallet</span>
              </button>
            )}

            {/* <Web3Button /> */}
            {/* <Connect2Phantom/> */}

            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>
          </div>
        </div>
      </Container>
      {/* <Web3Modal config={config} /> */}
    </header>
  );
};

export default Header;
