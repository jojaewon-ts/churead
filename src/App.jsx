import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import Post from "./pages/Post";
import Profile from "./pages/Profile";
import { useState } from "react";


function App() {

  const handPost = (churead) => {
    setChuread(churead);
  }

  const [churead, setChuread] = useState('');
  return (
    <div className="bg-churead-black h-full text-white overflow-auto">
      <div className="max-w-[572px] mx-auto h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home churead={churead}/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/post" element={<Post onPost={handPost}/>} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
