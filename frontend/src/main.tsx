import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./context/Auth.tsx";
import Routes from "./lib/Router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <Routes />
  </AuthProvider>
);
