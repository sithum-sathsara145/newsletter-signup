import React from "react";
import success from "../assets/images/icon-success.svg";

export default function SuccessMsg({ email, navigate }) {
  return (
    <div className="success">
      <img src={success} alt="success" />
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to
        {' '+email}. Please open it and click the button inside to confirm your
        subscription.
      </p>
      <button onClick={() => navigate("/")}>Dismiss message</button>
    </div>
  );
}
