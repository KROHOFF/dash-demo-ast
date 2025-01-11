import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./pages/auth/Login.tsx";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import Biomasa from "./pages/Biomasa.tsx";
import Sidebar from "./layouts/Sidebar.tsx";
import Header from "./layouts/Header.tsx";
import Background from "./layouts/Background.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Seguridad from "./pages/Seguridad.tsx";

const AppLayout = () => {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  return !isLoginPage ? (
    <div className="relative flex w-full inset-0">
      <Background />
      <main className="z-10 w-full max-h-screen overflow-hidden">
        <Header />
        <div className="relative flex flex-row gap-2 justify-center items-stretch w-full">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/biomasa" element={<Biomasa />} />
            <Route path="/seguridad" element={<Seguridad />} />
          </Routes>
        </div>
      </main>
    </div>
  ) : (
    <Login />
  );
};

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <AppLayout />
  </BrowserRouter>
);
