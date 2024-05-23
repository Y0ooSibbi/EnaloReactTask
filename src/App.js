import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './components/SignUp';

function App() {
  return (
    <BrowserRouter>
    <Routes>
     {/* <Route index element={<Home />} /> */}
          <Route path="sign-up" element={<SignIn />} />
          <Route path="sign-in" element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
