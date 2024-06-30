import { useState } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  const [acticvateUpload, setActivateUpload] = useState(false);
  const [acticvateGaller, setActivateGallery] = useState(false);

  return (
    <>
      <div className="bg-customPurple w-[100vw] h-[100vh] flex flex-col justify-center items-center ">
        <Navbar
          acticvateUpload={acticvateUpload}
          setActivateUpload={setActivateUpload}
          setActivateGallery={setActivateGallery}
          acticvateGaller={acticvateGaller}
        ></Navbar>
        <section className="sm:w-[90%] bg-customPurple sm:h-full sm:flex sm:justify-center sm:items-center sm:rounded-3xl sm:z-0 sm:m-auto sm:border-white  md:w-[90%] md:h-[90%] md:flex md:justify-center md:items-center md:rounded-3xl md:z-0 md:m-auto md:border-white lg:mt-0 lg:w-[82%] lg:h-[82%] lg:bg-white flex justify-center items-center rounded-3xl lg:relative lg:top-5 sm:mt-5 ">
          <Outlet
            acticvateUpload={acticvateUpload}
            setActivateUpload={setActivateUpload}
          ></Outlet>
        </section>
      </div>
    </>
  );
}

export default App;
