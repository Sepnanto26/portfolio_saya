import './index.css';
import React from "react";
import { createRoot } from "react-dom/client"; // Menggunakan createRoot (React 18)
import { ComponentPreview } from "./ComponentPreview";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <ComponentPreview />
    </React.StrictMode>
  );
}