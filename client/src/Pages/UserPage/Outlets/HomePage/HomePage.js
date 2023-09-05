import React from "react";
import { Outlet } from "react-router-dom";
import RightSideBar from "./RightSideBar/RightSideBar";

const HomePage = () => {



  return (
    <div className="flex w-screen h-screen ml-6 mt-5">
      <div className="w-7/12 h-4/5 border-2 mx-2">
        <Outlet></Outlet>
      </div>
      <div className="w-4/12 mr-6 min-h-screen border-2">
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
};

export default HomePage;
