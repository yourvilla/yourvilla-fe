import React, { useState } from "react";
// import classNames from "classnames";
import Header from "../shared/Header";
// import Footer from "../shared/Footer";
// import Sidebar from "../shared/Sidebar";
const Layout = ({ component }) => {
  const [open, setOpen] = useState(false);
  // const [selected, setSelected] = useState(0);

  return (
    <>
      <Header />
      <div className="w-full">
        {component}
        {/* <Footer /> */} 
      </div>
    </>
  );
};

export default Layout;
