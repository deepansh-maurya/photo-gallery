import { Schema, model } from "mongoose";

const photoGalleryModel = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export const PhotoGallery = model("PhotoGallery", photoGalleryModel);
