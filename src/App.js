import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import CardItem from "./Componets/CardItem";
import ViewFood from "./Componets/ViewFood";
import AddFood from "./Componets/AddFood";
import Navbar from "./Componets/Navbar";
import PieChart from "./Componets/PieChart";
import { StackChart } from "./Componets/StackChart";
import { SideNavbar } from "./Componets/SideNavbar";

function App() {
  return (
    <div className="App">
      <div className="sidedNav">
        <SideNavbar />
      </div>
      <div className="right-item">
        <Navbar />
        <div className="main-part">
          <CardItem />
          <div className="chart">
            <StackChart />
            <PieChart />
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default App;
