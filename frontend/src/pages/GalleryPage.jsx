import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function GalleryPage() {
  const [loading, setloading] = useState(true);
  let [gallery, setGallery] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  console.log(isDesktop);
  const nav = useNavigate();
  const [metaData, setMetaData] = useState(false);
  const [description, setDescription] = useState("");
  const fetchGallery = async () => {
    console.log("Adsd");
    const response = await fetch(
      "https://photo-gallery-y7xx.onrender.com/api/v1/gallery"
    );
    const injson = await response.json();
    if (injson.gallery.length == 0) setGallery(null);
    else setGallery(injson.gallery);
    setloading(false);
    console.log(injson);
    let metaArray = [];
    for (let i = 0; i < injson.gallery.length; i++) {
      metaArray.push(false);
    }
    setMetaData(metaArray);
  };
  useEffect(() => {
    if (isDesktop) toast("Use arrow keyes to move up down", { duration: 4000 });
    fetchGallery();
  }, []);

  return (
    <>
      <main className="w-[97%] h-[96%] lg:bg-white  bg-customPurple flex md:overflow-y-auto  justify-center items-center   flex-wrap gap-12  overflow-scroll overflow-x-hidden overflow-y-auto">
        {Array.isArray(gallery) &&
          gallery.map((data, index) => {
            return (
              <div
                onClick={() => {
                  nav("/photo-details-page", { state: { data } });
                }}
                onMouseEnter={() => {
                  let metadata = [...metaData];
                  metadata[index] = true;
                  setMetaData(metadata);
                  console.log(index, metaData[index]);
                  let tempDesc = "";
                  if (data.description.length > 123) {
                    console.log("123");
                    for (let i = 0; i < 123; i++) {
                      tempDesc += data.description[i];
                    }
                    tempDesc += "........more";
                    setDescription(tempDesc);
                  } else {
                    console.log("123 se kam");
                    let tempDesc = "";
                    for (let i = 0; i < data.description.length; i++) {
                      tempDesc += data.description[i];
                    }
                    setDescription(tempDesc);
                  }
                }}
                onMouseLeave={() => {
                  let metadata = [...metaData];
                  metadata[index] = false;
                  setMetaData(metadata);
                  console.log(index, metaData[index]);
                  let tempDesc = "";
                  setDescription(tempDesc);
                  console.log(description);
                }}
                key={data._id}
                className="relative cursor-pointer  rounded-3xl flex justify-center items-center shadow-black shadow-md"
              >
                <img
                  className={`lg:w-[500px] md:w-[700px]  rounded-3xl transition-all duration-200 ease-in-out    ${
                    metaData[index] === true ? "blur-md rounded-3xl" : ""
                  }  `}
                  src={data.image}
                  alt="image"
                />
                {metaData[index] == true ? (
                  <div className="absolute top-0 w-[90%] h-[90%] flex justify-center items-center flex-col lg:gap-10 md:gap-14  ">
                    <h1 className="font-playwriteNg lg:text-3xl md:text-5xl font-extrabold brightness-100 text-white ">
                      {data.title}
                    </h1>
                    <p className="font-extrabold font-playwriteNg w-[80%] lg:text-xl md:w-[100%] md:text-2xl  flex justify-center items-center text-slate-300  ">
                      {description}{" "}
                    </p>
                  </div>
                ) : null}
              </div>
            );
          })}
        {Array.isArray(gallery) && gallery.length == 0 ? (
          <div className="flex justify-center items-center h-screen">
            <div className="text-center">
              <h2 className="text-2xl text-red-600 font-bold mb-4">
                No posts to display
              </h2>
              <p className="text-black">Check back later for updates.</p>
            </div>
          </div>
        ) : null}
        {loading && <span className="spinner"></span>}
      </main>
      <Toaster />
    </>
  );
}
