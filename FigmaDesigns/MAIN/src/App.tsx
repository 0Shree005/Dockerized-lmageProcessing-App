import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { FirstPage } from './components/FirstPage/FirstPage/FirstPage';
import { SecondDetectionResultPageBLACK } from './components/DetectionOutput/SecondDetectionResultPageBLACK/SecondDetectionResultPageBLACK';
import { ImagePreviewPageBLACK } from './components/ImagePreview/ImagePreviewPageBLACK/ImagePreviewPageBLACK'; // import your ImagePreviewPageBLACK component

function AppContent() {
  const [imageData, setImageData] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [resultImageData, setResultImageData] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/dockerised-image-processing');
  }, []); // Empty dependency array means this effect runs once on mount

  useEffect(() => {
    if (imageFile) {
      const formData = new FormData();
      formData.append('image', imageFile);
      fetch('http://localhost:5000/', {
          method: 'POST',
          body: formData,
        })
        .then(response => response.json())
        .then(data => {
          const resultImage = data.image; // Access the 'image' property of the response
          setResultImageData(resultImage);
        });
    }
  }, [imageFile]);

  return (
    <div className="App">
      <Routes>
        <Route path="/dockerised-image-processing" element={<FirstPage imageData={imageData} setImageData={setImageData} setImageFile={setImageFile} />} />
        <Route path="/image-input" element={<FirstPage imageData={imageData} setImageData={setImageData} setImageFile={setImageFile} />} />
        <Route path="/detection-output" element={<SecondDetectionResultPageBLACK imageData={imageData} resultImageData={resultImageData} setResultImageData={setResultImageData} />} />
        <Route path="/image-preview" element={<ImagePreviewPageBLACK imageFile={imageFile} setImageData={setImageData} setImageFile={setImageFile} />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;