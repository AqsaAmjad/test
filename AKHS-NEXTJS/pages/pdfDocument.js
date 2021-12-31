import React, { useRef } from "react";
import LatestNews from "./LatestNews";
import AgaKhanHealthService from "./AgaKhanHealthService";
import BackgroundImage from "./BackgroundImageAKHS";
import OpeningHours from "./OpeningHours";
import CardComponent from "./Cardcomponent";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
const pdfDocument = () => {
  const pdfExportComponent = useRef(null);
  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };
  return (
    <div>
      <PDFExport ref={pdfExportComponent}>
        <div>
          <OpeningHours />
          <LatestNews />
          <CardComponent />
          <AgaKhanHealthService />
        </div>
      </PDFExport>
      <div className="p-3">
        <button className="border border-brownShade p-2 text-brownShade font-medium" primary={true} onClick={handleExportWithComponent}>
          Generate PDF
        </button>
      </div>
    </div>
  );
};

export default pdfDocument;
