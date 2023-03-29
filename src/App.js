import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Router, Route, Routes  , } from 'react-router-dom';

import ViewNote from './Componets/ViewNote';
import CreateNote from './Componets/CreatNote';
import Navbar from './Componets/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/createNote" element={<CreateNote />}></Route>
          <Route path="/ViewNote" element={<ViewNote />}></Route>
         
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
