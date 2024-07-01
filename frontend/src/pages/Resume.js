// src/Resume.js
import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import file from "../assets/pdf/resume.pdf";

const Resume = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <Worker
      workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
    >
      
      <div
        style={{
          height: "750px",
        }}
      >
        <Viewer fileUrl={file} plugins={[defaultLayoutPluginInstance]} />
      </div>
    </Worker>
  );
};

export default Resume;
