import React, { act, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  const [active, setActive] = useState();
  return (
    <>
      <nav className=" h-[73px] bg-customPurple font-playwrite  flex items-center justify-evenly gap-[450px]">
        <Link to="/">
          <div
            onClick={() => setActive(0)}
            className="absolute inset-0  w-80 flex justify-center transition-all duration-200 ease-in-out  mt-2 h-14 left-32 hover:bg-white/90  shadow-md  shadow-slate-500 rounded-3xl  backdrop:blur-3xl bg-white/50"
          >
            <h1
              className=" text-thick  relative text-4xl  m-1 top- left-2  leading-tight  font-extrabold bg-clip-text z-20 text-transparent bg-cover bg-center"
              style={{
                backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcFhqvy2XSbiCCdIKkK-qt1rdrzTCbqu-FQQ&s)`,
              }}
            >
              Photo Gallery
            </h1>
          </div>
        </Link>
        <div className="font-playwriteZa text-white flex gap-12">
          <div
            onClick={() => setActive(1)}
            className={`hover:bg-white/90 inset-0 w-52 h-10 transition-all duration-200 ease-in-out flex justify-center items-center font-extrabold   shadow-md hover:text-slate-950 shadow-slate-500 rounded-3xl  backdrop-blur-sm ${
              active == 1 ? "bg-white/90  text-black" : "bg-white/30"
            }  `}
          >
            <Link className="text-lg">Gallery Page</Link>
          </div>
          <div
            onClick={() => setActive(2)}
            className={`hover:bg-white/90 hover:text-slate-950 hover:font-extrabold inset-0 w-52 transition-all duration-200 ease-in-out h-10 flex justify-center items-center font-extrabold    shadow-md  shadow-slate-500 rounded-3xl  backdrop-blur-sm ${
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
