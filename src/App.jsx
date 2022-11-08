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
import AuthContextProvider from "./context/loginContext";

function App() {
  return (
    <div className="App bg-stone-200">
      <AuthContextProvider>
        <NavBar />
          <Routes>
              <Route element={<ProtectedRoute />}>
                <Route
                  path="/home"
                  element={
                    <Home />
                  }
                />
                <Route
                  path="/carga-saldo"
                  element={
                    <CargaSaldo />
                  }
                />
                <Route
                  path="/gastos"
                  element={
                    <Gastos />
                  }
                />
                <Route
                  path="/balance"
                  element={
                    <Balance />
                  }
                />
                <Route
                  path="/movimientos"
                  element={
                    <Movimientos />
                  }
                />
                <Route
                  path="/envio-de-dinero"
                  element={
                    <EnvioDinero />
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route path="/" element={<Login />} />
              <Route path="/registrar" element={<SignUp />} />
          </Routes>
      <Footer />
     </AuthContextProvider>
    </div>
  );
}

export default App;
