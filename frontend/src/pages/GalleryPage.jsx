import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
export default function GalleryPage() {
  let [gallery, setGallery] = useState();
  const [metaData, setMetaData] = useState(false);
  const [description, setDescription] = useState("");
  const fetchGallery = async () => {
    const response = await fetch("http://localhost:3000/api/v1/gallery");
    const injson = await response.json();
    console.log(injson);
    setGallery(injson.gallery);

    let metaArray = [];
    for (let i = 0; i < injson.gallery.length; i++) {
      metaArray.push(false);
    }
    setMetaData(metaArray);
  };
  useEffect(() => {
    toast("Use Arrow keys to scroll Up Down, Hover to view details", {
      duration: 3000,
    });
    fetchGallery();
  }, []);

  return (
    <>
      <main className="w-[97%] h-[96%]  flex  justify-center items-center   flex-wrap gap-12 bg-white overflow-scroll overflow-x-hidden overflow-y-auto">
        {Array.isArray(gallery) &&
          gallery.map((data, index) => {
            return (
              <div
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
                className="relative cursor-pointer rounded-3xl flex justify-center items-center shadow-black shadow-md"
              >
                <img
                  className={`w-[500px]  rounded-3xl transition-all duration-200 ease-in-out  ${
                    metaData[index] === true ? "blur-md rounded-3xl" : ""
                  }  `}
                  src={data.image}
                  alt="image"
                />
                {metaData[index] == true ? (
                  <div className="absolute top-0 w-[90%] h-[90%] flex justify-center items-center flex-col gap-14  ">
                    <h1 className="font-playwriteNg text-2xl font-extrabold brightness-100 text-white ">
                      {data.title}
                    </h1>
                    <p className="font-extrabold font-playwriteNg w-[80%]  flex justify-center items-center text-slate-300  ">
                      {description}{" "}
                      <span className="text-blue-400">....more</span>
                    </p>
                  </div>
                ) : null}
              </div>
            );
          })}
      </main>
      <Toaster />
    </>
  );
}
