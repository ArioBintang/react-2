import { BrowserRouter,Route,Routes } from "react-router-dom";
import Team from "./components/shared/Hero/Team";
import Home from "./components/shared/Hero/Home";
import About from "./components/shared/Hero/About";
import Login from "./components/shared/Hero/Login";

function App() {
  return (
    <>
    <div className="container">

      <BrowserRouter>
      <Routes>
        <Route index element= {<Home />} />
        <Route path="team" element={<Team />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
       
      </Routes>
      </BrowserRouter>

    </div>
      
    </>
  );
}

export default App;
