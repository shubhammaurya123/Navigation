import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Router, Route, Routes  , } from 'react-router-dom';

import ViewFood from './Componets/ViewFood';
import AddFood from './Componets/AddFood';
import Navbar from './Componets/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Hello This is Food App Home Page </h1>}></Route>
          <Route path="/AddFood" element={<AddFood />}></Route>
          <Route path="/ViewFood" element={<ViewFood />}></Route>
         
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;