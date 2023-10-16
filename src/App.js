import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import DetailMovie from "./pages/DetailMovie/DetailMovie";
import Home from "./pages/Home/Home";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import Apps from "./pages/Apps/Apps";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomeTemplate>
                <Home />
              </HomeTemplate>
            }
          />
          <Route
            path="/news"
            element={
              <HomeTemplate>
                <News />
              </HomeTemplate>
            }
          />
          <Route
            path="/contact"
            element={
              <HomeTemplate>
                <Contact />
              </HomeTemplate>
            }
          />
          <Route
            path="/app"
            element={
              <HomeTemplate>
                <Apps />
              </HomeTemplate>
            }
          />
          <Route
            path="/movie/:id"
            element={
              <HomeTemplate>
                <DetailMovie />
              </HomeTemplate>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
