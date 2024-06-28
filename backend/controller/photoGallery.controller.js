import { PhotoGallery } from "../models/photoGallery.model.js";
import { upoadFile } from "../utils/cloudinary.util.js";
export const uploadPhotos = async (req, res) => {
  console.log("sdf");
  try {
    const { title, description } = req.body;
    if (title == "" || description == "") {
      return res
        .status(400)
        .json({ success: false, message: "wrong credentials" });
    }

    console.log(req.files);

    if (
      !req.files ||
      !Array.isArray(req.files.image) ||
      !req.files.image.length > 0
    ) {
      return res
        .status(400)
        .json({ success: false, message: "wrong credentials" });
    }
    const imagePath = req.files.image[0].path;
    const imageURL = await upoadFile(imagePath);

    const photoGallery = await PhotoGallery.create({
      title,
      description,
      image: imageURL,
    });
    console.log(photoGallery);
    if (!photoGallery) {
      return res
        .status(401)
        .json({ success: false, message: "failed to upload image " });
    }
    return res
      .status(200)
      .json({ success: true, message: "image uploaded successfully " });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: true, message: "something went wrong" });
  }
};

export const getAllPhotos = async (req, res) => {
  try {
    const gallery = await PhotoGallery.find({});
    if (!gallery) {
      return res.status(404).json({ success: false, message: "empty gallery" });
    }

    return res
      .status(200)
      .json({
        success: true,
        message: "images found successfully",
        gallery: gallery,
      });
  } catch (error) {
    return res
      .status(500)
      .json({ success: true, message: "something went wrong" });
  }
};
