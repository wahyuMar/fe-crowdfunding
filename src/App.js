import './App.css';
import SignUp from './Components/LoginSignup/SignUp';
import Login from './Components/LoginSignup/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
