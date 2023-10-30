// 'use client';
// import React, { useState, useEffect } from "react";  
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;



// const Resume =() => {
//   const [width, setWidth] = useState(1200); 
//   useEffect(() => {
//     setWidth(window.innerWidth);
//   }, []);

//   return (
//     <div className="resume-section">
//           <Document  file={} className="d-flex justify-content-center">
//             <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
//           </Document>
//     </div>
//   );
// }

// export default Resume;