import './App.css';
import About from './pages/About';
import Booking from './pages/Booking';
import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes >
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
