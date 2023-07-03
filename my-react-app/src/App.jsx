import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

function App() {


  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />


          </Routes>

      </BrowserRouter>
     
    </>
  )
}

export default App
