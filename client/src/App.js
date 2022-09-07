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
import Billboards from "./routes/admin-routes/ad-billboards";
import Pages from "./routes/admin-routes/ad-pages";
import SideMenu from "./components/SideMenu/sideMenu";
import Dashboard from "./routes/admin-routes/dashboard";
import PageDetails from "./routes/admin-routes/page-details";
import Section from "./routes/admin-routes/section";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBar />}>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/details/:_id" element={<Details />}></Route>
          <Route path="/article/:path" element={<GenericPage />}></Route>
          <Route element={<Tab />}>
            <Route path="/my-billboards" element={<MyBillboards />}></Route>
            <Route path="/my-orders" element={<MyOrders />}></Route>
            <Route path="/my-account" element={<MyAccount />}></Route>
          </Route>
        </Route>

        {/* Route for admin */}
        <Route element={<SideMenu />}>
          <Route path="/admin/" element={<Dashboard />}></Route>
          <Route path="/admin/billboards" element={<Billboards />}></Route>
          <Route path="/admin/users"></Route>
          <Route path="/admin/orders"></Route>
          <Route path="/admin/pages" element={<Pages />}></Route>
          <Route path="/admin/page-details/:_id" element={<PageDetails />}></Route>
          <Route path="/admin/section/:_id" element={<Section />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;