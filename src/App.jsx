import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Balance from "./pages/Balance";
import CargaSaldo from "./pages/CargaSaldo";
import EnvioDinero from "./pages/EnvioDinero";
import Gastos from "./pages/Gastos";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import Movimientos from "./pages/Movimientos";
import { ProtectedRoute } from "./utils/ProtectedRoute";

function App() {
  return (
    <div className="App bg-stone-200">
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registrar" element={<SignUp />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/carga-saldo"
          element={
            <ProtectedRoute>
              <CargaSaldo />
            </ProtectedRoute>
          }
        />
        <Route
          path="/gastos"
          element={
            <ProtectedRoute>
              <Gastos />
            </ProtectedRoute>
          }
        />
        <Route
          path="/balance"
          element={
            <ProtectedRoute>
              <Balance />
            </ProtectedRoute>
          }
        />
        <Route
          path="/movimientos"
          element={
            <ProtectedRoute>
              <Movimientos />
            </ProtectedRoute>
          }
        />
        <Route
          path="/envio-de-dinero"
          element={
            <ProtectedRoute>
              <EnvioDinero />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
