import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Market from "../pages/Market";
import Create from "../pages/Create";
import Contact from "../pages/Contact";
import Adopt from "../pages/Adopt"
import DonatePage from "../pages/DonatePage";
import Wallet from "../pages/Wallet";
import NftDetails from "../pages/NftDetails";
import AdoptDetails from "../pages/AdoptDetails";
import DonateDetail from "../pages/DonateDetail";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/market" element={<Market />} />
      <Route path="/create" element={<Create />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/adopt" element={<Adopt />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/donate" element= {<DonatePage/>}/>
      <Route path="/market/:id" element={<NftDetails />} />
      <Route path="/adopt/:id" element={<AdoptDetails />} />
      <Route path = '/donate/:id' element={<DonateDetail/>}/>
    </Routes>
  );
};

export default Routers;
