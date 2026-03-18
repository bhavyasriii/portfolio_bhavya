import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import MotionGallery from "./pages/MotionGallery";
import CaseStudyHealthcare from "./pages/CaseStudyHealthcare";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/motion" element={<MotionGallery />} />
      <Route path="/case-study/healthcare" element={<CaseStudyHealthcare />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}