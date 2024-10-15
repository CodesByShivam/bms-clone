import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Register from "./pages/Register";
import './App.css'
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path={"/"}
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
             <Route path={"/login"} element={<Login />} />
            <Route path={"/register"} element={<Register />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            ></Route>
            {/*<Route
              path="/partner"
              element={
                <ProtectedRoute>
                  <Partner />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/movie/:id"
              element={
                <ProtectedRoute>
                  <SingleMovie />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/book-show/:id"
              element={
                <ProtectedRoute>
                  <BookShow />
                </ProtectedRoute>
              }
            ></Route>
            <Route path="/forget" element={<Forget />} />
            <Route path="/reset/:email" element={<Reset />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App
