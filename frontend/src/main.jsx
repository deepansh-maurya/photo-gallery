import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
const LazyGalleryPage = React.lazy(() => import("./pages/GalleryPage.jsx"));
const LazyUploadPage = React.lazy(() => import("./pages/UploadPage.jsx"));
const LazyPhotoDetailsPage = React.lazy(() =>
  import("./pages/PhotoDetailsPage.jsx")
);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        path="/photo-details-page"
        element={
          <Suspense fallback={<div>loading....</div>}>
            <LazyPhotoDetailsPage />
          </Suspense>
        }
      />
      <Route
        path="/"
        element={
          <Suspense fallback={<div>loading....</div>}>
            <LazyGalleryPage />
          </Suspense>
        }
      />
      <Route
        path="/upload-page"
        element={
          <Suspense fallback={<div>loading....</div>}>
            <LazyUploadPage />
          </Suspense>
        }
      />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
