import React from "react";
import { Switch, Route } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Shirts from "views/admin/Shirts.js";
import Settings from "views/admin/Settings.js";
import Sales from "views/admin/Sales.js";
import Users from "views/admin/Users.js";

const Admin = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/shirts" exact component={Shirts} />
            <Route path="/settings" exact component={Settings} />
            <Route path="/sales" exact component={Sales} />
            <Route path="/users" exact component={Users} />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Admin
