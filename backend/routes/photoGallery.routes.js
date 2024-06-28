import { Router } from "express";
import { uploadPhotos } from "../controller/photoGallery.controller.js";
import { upload } from "../middleware/multer.middleware.js";
const router = Router();

router
  .route("/upload-image")
  .get(upload.fields([{ name: "image", maxCount: 1 }]), uploadPhotos);

export default router;
