
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./components/Login";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

