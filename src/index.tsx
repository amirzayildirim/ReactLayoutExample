import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import UserLoginProvider from "./context/LoginContext";
import Logout from "./pages/Logout";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./layouts/Layout";
import App from "./pages/App";
import "./../src/css/site.css";
import AuthrError from "./pages/AuthrError";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const router = (
  <BrowserRouter>
    <UserLoginProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/app" element={<App />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
        <Route path="/authrError" element={<AuthrError />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </UserLoginProvider>
  </BrowserRouter>
);

root.render(<React.StrictMode>{router}</React.StrictMode>);
