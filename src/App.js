import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Newsletter from "./components/Newsletter";
import SuccessMsg from "./components/SuccessMsg";
import "./App.css";
import { validateEmail } from "./Utils";

export default function App() {
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();
  const isValid = validateEmail(email);
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <Newsletter
              email={email}
              setEmail={setEmail}
              navigate={navigate}
              isValid={isValid}
            />
          }
        />
        {isValid && (<Route path="/success" element={<SuccessMsg />} />)}
        
      </Routes>
    </div>
  );
}
