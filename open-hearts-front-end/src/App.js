
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Families from "./components/Families";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Error404 from "./components/Error404";
import Donations from "./components/Donations"
import AddFamily from "./components/AddFamily"
import "./App.css";
import "./index.css";
import "./families.css";
import Editfamily from "./components/EditFamily";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/families" element={<Families />} />
          <Route path="/donate" element={<Donations />} />
          <Route path="/families/new" element={<AddFamily/>} />
          <Route path="*" element={<Error404 />} />
          <Route path='/families/:id/edit' element={<Editfamily/>}/>
          {/* <Route path='/AddFamily' element={<AddFamily/>}/> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
