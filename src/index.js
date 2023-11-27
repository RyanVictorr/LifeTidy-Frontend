import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';
import GlobalStyle from "./styles/globalStyle";
import Routes from "./routes";
import { AuthProvider } from "./contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <AuthProvider>
      <Routes /> <GlobalStyle />
    </AuthProvider>
  </>
);
