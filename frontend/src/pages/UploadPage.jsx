import React, { useState } from "react";
import "./UploadPage.css";
import { Toaster, toast } from "react-hot-toast";
export default function UploadPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    console.log(file);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", file);

    let options = {
      method: "POST",
      body: formData,
    };
    let response = await fetch(
      "https://photo-gallery-y7xx.onrender.com/api/v1/upload-image",
      options
    );
    let injson = await response.json();
    console.log(injson);
    if (!injson.success) {
      toast.error("Failed to upload the image");
      setLoading(false);
    } else {
      toast.success("image uploaded successfully");
      setLoading(false);
    }
    setTitle("");
    setDescription("");
    setFile(null);
  };
  console.log(loading);
  return (
    <div
      style={{
        backgroundImage:
          "url(https://images.hdqwalls.com/wallpapers/girl-lying-down-4k-yh.jpg)",
      }}
      className="w-[100%] h-[90%] lg:h-[100%] bg-cover bg-center object-center sm:overflow-hidden md:overflow-hidden rounded-3xl flex  justify-center items-center lg:relative  "
    >
      <form
        onSubmit={handleSubmit}
        className=" bg-white/14  backdrop-filter backdrop-blur-sm border sm:px-20 md:p-24 sm:py-12 border-white p-8 px-16 lg:w-[45%] lg:h-[82%] lg:bg-white/40 rounded-3xl  lg:flex  lg:flex-col lg:px-24"
      >
        <h1 className="text-3xl mb-3 text-white sm:text-center lg:text-center lg:text-2xl  font-playwriteZa font-extrabold ">
          Upload Image
        </h1>

        <label
          htmlFor="title"
          className="block mb-2 font-playwriteZa text-white mt-4 sm:text-center sm:flex sm:flex-col sm:justify-center sm:items-center  lg:text-xl"
        >
          Title:
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className=" font-sans text-black p-2 w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none sm:w-[90%] focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="Enter title"
          />
        </label>

        <label
          htmlFor="description"
          className="block mb-2 font-playwriteZa text-white sm:flex sm:flex-col sm:justify-center sm:items-center  lg:text-xl "
        >
          Description:
          <input
            placeholder="Enter Decription"
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className=" text-black font-sans  p-2 w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none  sm:w-[90%] focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </label>

        <label
          htmlFor="file"
          className=" mb-4 flex font-playwriteZa text-white w-48  sm:flex sm:flex-col sm:justify-center sm:items-center  lg:text-xl lg:flex    lg:flex-col lg:gap-3 "
        >
          Choose File
          <input
            type="file"
            id="file"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
            className="mt-1 sm:relative sm:left-32 sm:w-[50% lg:text-xl "
            placeholder=""
          />
        </label>

        {loading ? (
          <button
            type="submit"
            className="w-[100%] font-extrabold  flex justify-center items-center gap-6 py-2 px-4 rounded-m bg-black text-white lg:text-xl"
          >
            <span className="loader"></span> Uploading
          </button>
        ) : (
          <button
            type="submit"
            className="bg-white text-black w-[100%] font-extrabold  py-2 px-4 rounded-md hover:bg-black hover:text-white lg:text-xl"
          >
            Upload
          </button>
        )}
      </form>
      <Toaster />
    </div>
  );
}
