import "./App.css";
import Browse from "./browse/browse";
import NetflixTitle from "./NetflixTitle";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<NetflixTitle></NetflixTitle>} />
      <Route path="/browse" element={<Browse></Browse>} />
    </Routes>
  );
}

export default App;
