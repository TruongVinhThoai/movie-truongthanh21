import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import DetailMovie from "./pages/DetailMovie/DetailMovie";
import Home from "./pages/Home/Home";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import Register from "./pages/Register/Register";
import Checkout from "./pages/Checkout/Checkout";
import Spinner from "./components/Spinner/Spinner";
import PrivateRoute from "./templates/PrivateRoute/PrivateRoute";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Spinner />
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
            path="/movie/:id"
            element={
              <HomeTemplate>
                <DetailMovie />
              </HomeTemplate>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/checkout/:id"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile/:id"
            element={
              <HomeTemplate>
                <Profile />
              </HomeTemplate>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
