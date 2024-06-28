import { useState } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-customPurple w-[100vw] h-[100vh] ">
        <Navbar></Navbar>
        <section className="w-[87%] h-[85%] shadow-black shadow-md bg-white rounded-3xl m-auto mt-2 border-white flex justify-center items-center ">
          <Outlet></Outlet>
        </section>
      </div>
    </>
  );
}

export default App;
