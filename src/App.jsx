import { BrowserRouter, Routes, Route } from "react-router-dom";
import Directory from "./pages/Directory";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Directory />} />
      </Routes>
    </BrowserRouter>
  );
}
