import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";

import ViewFood from "./Componets/ViewFood";
import AddFood from "./Componets/AddFood";
import Navbar from "./Componets/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <BrowserRouter> 
        <Routes>
        <Route path="/" element={<h1>This is Home page</h1>} />
          <Route path="/addfood" element={<AddFood />} />
          <Route path="/viewfood" element={<ViewFood/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
