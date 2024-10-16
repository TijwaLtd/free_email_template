import React, { useState } from "react";
import { useParams } from "react-router-dom";

function TemplatePreview() {
  const { templateName } = useParams();
  const [viewMode, setViewMode] = useState("desktop");

  // Function to set the iframe width based on the selected view mode.
  const getIframeWidth = () => {
    switch (viewMode) {
      case "mobile":
        return "375px"; // Typical mobile width (e.g., iPhone X).
      case "tablet":
        return "768px"; // Typical tablet width.
      default:
        return "100%"; // Full width for desktop.
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Preview: {templateName}</h1>

      {/* Buttons to switch between desktop and mobile view */}
      <div style={{ marginBottom: "10px" }}>
        <button
          onClick={() => setViewMode("desktop")}
          style={{ marginRight: "10px" }}
        >
          Desktop
        </button>
        <button
          onClick={() => setViewMode("mobile")}
          style={{ marginRight: "10px" }}
        >
          Mobile
        </button>
        <button
          onClick={() => setViewMode("tablet")}
          style={{ marginRight: "10px" }}
        >
          Tablet
        </button>
      </div>

      {/* Download Button */}
      <a href={`/templates/${templateName}.html`} download>
        <button>Download</button>
      </a>

      {/* Iframe for preview */}
      <div
        style={{
          border: "1px solid #ccc",
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <iframe
          src={`/templates/${templateName}.html`}
          title={templateName}
          style={{
            width: getIframeWidth(),
            height: "100vh",
            border: "none",
            transition: "width 0.3s ease", // Smooth transition when changing width.
          }}
        />
      </div>
    </div>
  );
}

export default TemplatePreview;
