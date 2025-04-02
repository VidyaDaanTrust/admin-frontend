import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import { AuthProvider } from "./contexts/AuthContext";

createRoot(document.getElementById('root')).render(
  <AuthProvider>  {/* ✅ Wrap everything with AuthProvider */}
    <BrowserRouter>
        <App />
    </BrowserRouter>
</AuthProvider>
)
