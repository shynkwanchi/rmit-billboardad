import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./routes/user-routes/Home/home";
import Details from "./routes/user-routes/Details/details";
import MyBillboards from "./routes/user-routes/Profile/my-billboards";
import GenericPage from "./routes/user-routes/GenericPage/generic-page";
import Tab from "./components/Tab/tab";
import MyOrders from "./routes/user-routes/Profile/my-orders";
import MyAccount from "./routes/user-routes/Profile/my-account";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/details/:_id" element={<Details />}></Route>
        <Route path="/about-us" element={<GenericPage />}></Route>
        <Route path="/faqs" element={<GenericPage />}></Route>
        <Route path="/tos" element={<GenericPage />}></Route>
        <Route path="/privacy-policy" element={<GenericPage />}></Route>
        <Route element={<Tab />}>
            <Route path="/my-billboards" element={<MyBillboards />}></Route>
            <Route path="/my-orders" element={<MyOrders />}></Route>
            <Route path="/my-account" element={<MyAccount />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;