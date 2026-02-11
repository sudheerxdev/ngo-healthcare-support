import { useState } from "react";
import SupportForm from "./components/SupportForm";
import Dashboard from "./components/Dashboard";
import Chatbot from "./components/Chatbot";
import Toast from "./components/Toast";
import "./App.css";

function App() {
  const [requests, setRequests] = useState([]);
  const [toast, setToast] = useState("");

  const addRequest = (request) => {
    setRequests([request, ...requests]);
  };

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 3000);
  };

  return (
    <div className="container">
      <h1>NGO Healthcare Support Portal</h1>
      <p className="tagline">
        Supporting communities with smart healthcare automation
      </p>

      <SupportForm addRequest={addRequest} showToast={showToast} />
      <Dashboard requests={requests} />
      <Chatbot />
      <Toast message={toast} />
    </div>
  );
}

export default App;
