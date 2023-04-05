import React from "react";
import { Outlet } from "react-router-dom";

import PrimaryNav from "../components/Navbar";

function Layout() {
  return (
    <>
      <PrimaryNav />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
