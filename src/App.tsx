import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LayoutContent from './Components/Layout';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <LayoutContent>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/sobre" element={<AboutUs />} /> */}
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </LayoutContent>
    </BrowserRouter>
  );
}

export default App;
