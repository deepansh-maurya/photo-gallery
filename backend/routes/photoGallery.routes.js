import { Router } from "express";
import {
  getAllPhotos,
  uploadPhotos,
} from "../controller/photoGallery.controller.js";
import { upload } from "../middleware/multer.middleware.js";
const router = Router();

router
  .route("/upload-image")
  .post(upload.fields([{ name: "image", maxCount: 1 }]), uploadPhotos);

router.route("/gallery").get(getAllPhotos);
export default router;
