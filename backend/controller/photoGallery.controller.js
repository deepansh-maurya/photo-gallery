import { PhotoGallery } from "../models/photoGallery.model.js";

export const uploadPhotos = async (req, res) => {
  console.log("sdf");
  try {
    const { title, description } = req.body;
    if (title == "" || description == "") {
      return res
        .status(400)
        .json({ success: false, message: "wrong credentials" });
    }

    if (
      !req.files ||
      !Array.isArray(req.files.image) ||
      !req.files.image.length > 0
    ) {
      return res
        .status(400)
        .json({ success: false, message: "wrong credentials" });
    }
    const imagePath = req.files.image.image[0].path;
    const photoGallery = await PhotoGallery.create({
      title,
      description,
      image: imagePath,
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
    return res
      .status(500)
      .json({ success: true, message: "something went wrong" });
  }
};
