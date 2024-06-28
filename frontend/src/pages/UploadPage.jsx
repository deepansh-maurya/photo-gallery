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
      "http://localhost:3000/api/v1/upload-image",
      options
    );
    let injson = await response.json();
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
      className="w-[100%] h-[100%] bg-cover rounded-3xl flex justify-center items-center"
    >
      <form
        onSubmit={handleSubmit}
        className=" bg-white/40  backdrop-filter backdrop-blur-sm border border-white p-8 px-16 rounded-3xl"
      >
        <h1 className="text-3xl mb-8 text-white   font-playwriteZa font-extrabold ">
          Upload Image
        </h1>

        <label
          htmlFor="title"
          className="block mb-2 font-playwriteZa text-white mt-4"
        >
          Title:
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className=" font-sans text-black p-2 w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </label>

        <label
          htmlFor="description"
          className="block mb-2 font-playwriteZa text-white "
        >
          Description:
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className=" text-black font-sans  p-2 w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </label>

        <label
          htmlFor="file"
          className=" mb-4 flex flex-wrap font-playwriteZa text-white w-48 "
        >
          Choose File:
          <input
            type="file"
            id="file"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
            className="mt-1"
          />
        </label>

        {loading ? (
          <button
            type="submit"
            className="w-[100%] font-extrabold  flex justify-center items-center gap-6 py-2 px-4 rounded-m bg-black text-white"
          >
            <span className="loader"></span> Uploading
          </button>
        ) : (
          <button
            type="submit"
            className="bg-white text-black w-[100%] font-extrabold  py-2 px-4 rounded-md hover:bg-black hover:text-white"
          >
            Upload
          </button>
        )}
      </form>
      <Toaster />
    </div>
  );
}
