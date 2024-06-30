import React, { useEffect, useState } from "react";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { useLocation } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function PhotoDetailsPage() {
  const [activateDetails, setActivateDetails] = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth >= 1024 || window.innerWidth >= 768
  );

  useEffect(() => {
    if (isDesktop) toast("Hold pointer to view details", { duration: 3000 });
  }, []);
  const imageDetils = useLocation();
  const nav = useNavigate();
  const backgroundImageStyle = {
    backgroundImage: `url(${imageDetils.state.data.image})`,
  };
  return (
    <>
      <div
        className="w-[100%] h-[100%] relative z-0 overflow-hidden rounded-3xl flex font-playwriteNg justify-center items-center"
        onMouseDown={() => setActivateDetails(true)}
        onMouseUp={() => setActivateDetails(false)}
      >
        <div
          style={backgroundImageStyle}
          className={` sm:w-[100%] sm:h-[150px] md:w-[100%] md:h-[100%] lg:w-[100%] lg:h-[100%]  border-black rounded-3xl bg-cover absolute top-0 left-0 bg-center object-cover transition-all transition-200 ease-in-out  ${
            activateDetails ? "blur-lg" : null
          } `}
        ></div>
        {/* <img
          src={imageDetils.state.data.image}
          className="sm:absolute lg:hidden md:hidden sm:top-2 sm:w-[100%] sm:h-[38%] md:top-2 md:w-[100%] md:h-[48%] rounded-3xl  shadow-md shadow-black"
          alt=""
        /> */}
        <button
          onClick={() => {
            nav("/");
          }}
          className="rounded-full p-1 sm:absolute sm:top-5 sm:left-3 md:absolute md:top-5 md:left-3 absolute  top-2 left-2 shadow-black shadow-md bg-white/80 transition-all transition-200 ease-in-out hover:bg-black hover:text-white font-extrabold sm:w-[10%] "
        >
          <RxDoubleArrowLeft />
        </button>
        <div className="z-10 lg:hidden md:hidden absolute top-[50%]  w-[80%] h-[100%] blur-none text-white font-extrabold flex flex-col justify-center items-center ">
          <h1 className=" absolute md:hidden sm:top-[-5%] md:top-[14px] md:text-5xl  text-3xl text-center text-slate-200">
            {imageDetils.state.data.title}
          </h1>
          <p className="relative sm:bottom-[140px] md:bottom-[270px] md:text-xl  sm:text-lg font-medium w-[120%]">
            {imageDetils.state.data.description}
          </p>
        </div>
        {activateDetails ? (
          <div className="sm:hidden z-10  absolute w-[80%] h-[100%] blur-none text-white font-extrabold flex flex-col justify-center items-center ">
            <h1 className=" absolute top-0 m-3 text-5xl  font-extrabold text-center text-white">
              {imageDetils.state.data.title}
            </h1>
            <p className="text-2xl font-bold text-white">
              {imageDetils.state.data.description}
            </p>
          </div>
        ) : null}
      </div>
      <Toaster />
    </>
  );
}
