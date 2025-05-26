import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App/App.tsx";
import CafeInfo from "./components/CafeInfo/CafeInfo.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <CafeInfo />
  </StrictMode>
);
