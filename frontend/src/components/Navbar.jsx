import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar({
  acticvateUpload,
  setActivateUpload,
  setActivateGallery,
  acticvateGaller,
}) {
  const nav = useNavigate();
  const [active, setActive] = useState();
  console.log(acticvateUpload);
  return (
    <>
      <nav className="sm:min-h-[10%] sm:h-auto sm:z-10 sm:bg-customPurple sm:font-playwrite sm:flex sm:sticky sm:top-0 sm:justify-center sm:items-center md:min-h-[10%] md:h-auto md:z-10 md:bg-customPurple md:font-playwrite md:flex md:sticky md:top-0 md:justify-center md:items-center w-[100%] lg:gap-[30%] sticky lg:flex lg:justify-evenly lg:items-center ">
        <div to="/">
          <div
            onClick={() => {
              setActive(0);
            }}
            className="absolute transition-all duration-200 ease-in-out sm:w-[180%] sm:h-[90%] hover:bg-white/90 h-[7%] sm:flex sm:justify-center sm:items-center shadow-md shadow-slate-500 rounded-3xl sm:gap-3 sm:relative sm:left-[-40%] sm:py-[2%] backdrop:blur-3xl md:w-[180%] md:h-[130%] md:flex md:justify-center md:items-center md:gap-3 md:relative md:left-[-40%] md:py-[2%]  bg-white/50 lg:w-[18%] lg:h-[60px] lg:absolute lg:top-[-190%] lg:font-playwriteZa lg:flex lg:justify-center lg:items-center  "
          >
            <div className="sm:relative sm:left-0 md:text-2xl lg:hidden  sm:text-white">
              <RxHamburgerMenu />
            </div>
            <h1
              onClick={() => {
                setActivateUpload(!acticvateUpload);
                setActivateGallery(!acticvateGaller);
              }}
              className=" text-thick sm:text-lg  md:text-4xl  cursor-pointer font-extrabold bg-clip-text z-20 text-transparent lg:text-[170%] text-3xl bg-cover bg-center"
              style={{
                backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr2nX2p3qsD5t4oHgZS_MrwjH3hF93ZYEUxg&s)`,
              }}
            >
              Photo Gallery
            </h1>
          </div>
        </div>
        {acticvateUpload && (
          <div className="sm:visible md:visible lg:hidden flex flex-col justify-center items-center item">
            <div
              onClick={() => {
                nav("/upload-page");
                setActivateUpload(false);
                setActivateGallery(false);
              }}
              className="sm:z-20 sm:absolute sm:w-[60%] transition-all transition-200 ease-in-out sm:bg-white sm:h-[14] sm:top-[70px] sm:left-24 sm:text-lg sm:flex sm:justify-center sm:items-center sm:rounded-3xl md:z-20 md:absolute md:w-[57%] md:bg-white  md:top-[80px] md:left-[204px] md:text-2xl md:flex  md:justify-center md:items-center md:rounded-3xl md:h-14 md:m-auto"
            >
              {" "}
              Upload Image
            </div>

            <div
              onClick={() => {
                nav("/");
                setActivateGallery(false);
                setActivateUpload(false);
              }}
              className="sm:z-20 sm:absolute md:visible md:z-20 md:absolute sm:w-[60%] md:w-[57%] sm:bg-white md:bg-white sm:h-[14]  sm:top-[104px] md:top-36 sm:text-lg  transition-all transition-200 ease-in-out sm:left-24 md:left-[204px]  sm:flex md:flex sm:justify-center md:justify-center md:text-2xl sm:items-center md:items-center sm:rounded-3xl md:rounded-3xl md:h-14"
            >
              Gallery Page
            </div>
          </div>
        )}
        <div className="font-playwriteZa  sm:hidden md:hidden mt-[-2%] text-white hidden lg:flex gap-12 ">
          <div
            onClick={() => setActive(1)}
            className={`hover:bg-white/90 inset-0 w-52 h-10 mt-[1%] transition-all duration-200 ease-in-out flex justify-center items-center md:mt-[4%] font-extrabold   shadow-md hover:text-slate-950 shadow-slate-500 rounded-3xl lg:relative lg:flex lg:justify-center lg:items-center   backdrop-blur-sm ${
              active == 1 ? "bg-white/90  text-black" : "bg-white/30"
            }  `}
          >
            <Link className="text-lg">Gallery Page</Link>
          </div>
          <div
            onClick={() => setActive(2)}
            className={`hover:bg-white/90 hover:text-slate-950 mt-[1%] hover:font-extrabold inset-0 w-52 transition-all duration-200 ease-in-out h-10 flex md:mt-[4%] justify-center items-center font-extrabold    shadow-md  shadow-slate-500 rounded-3xl  backdrop-blur-sm ${
              active == 2 ? "bg-white/90 text-black" : "bg-white/30"
            }`}
          >
            <Link to="/upload-page" className="text-lg">
              Upload Page
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
