import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import "./assets/css/output.css";
import "./assets/css/shop-btn-2.css";
import "./assets/css/watch-btn.css";
import "./assets/css/navigation.css";
import "./assets/css/contact-form.css";
import "./assets/css/faq-dropdown.css";

import ModalContext from "./context/ModalContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalContext>
      <RouterProvider router={router} />
    </ModalContext>
  </StrictMode>
);
