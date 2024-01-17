import Login from "../login/Login";
import Register from "../register/Register";
import Reset from "../reset/Reset";
import Header from "../header/Header";
import AddImage from "../addImage/AddImage";
import GalleryMain from "../galleryMain/GalleryMain";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Header/>
          <Routes>
          <Route path="/" element={<GalleryMain />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/addImage" element={<AddImage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;