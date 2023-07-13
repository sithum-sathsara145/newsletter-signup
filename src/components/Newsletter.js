import React from "react";

import newsletter from "../assets/images/illustration-sign-up-desktop.svg";
import iconlist from "../assets/images/icon-list.svg";
import { validateEmail } from "../Utils";

export default function Newsletter({ email, setEmail, navigate }) {
  const isValid = validateEmail(email);
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail(email);
    if (isValid){
      navigate("/success");
    }else{
      alert("Incorrect Email")
    }
  };
  console.log(email, isValid);
  return (
    <div className="newsletter">
      <div className="newsletter-content">
        <h1>Stay updated!</h1>

        <p>
          Join 60,000+ product managers receiving monthly updates on:
          <div className="ticklist">
            <div>
              {" "}
              <img src={iconlist} alt="tick" /> Product discovery and building
              what matters
            </div>
            <div>
              <img src={iconlist} alt="tick" />
              Measuring to ensure updates are a success{" "}
            </div>
            <div>
              <img src={iconlist} alt="tick" />
              And much more!
            </div>
          </div>
        </p>
        <form>
          <div>
            <label htmlFor="email">Email address</label>
            {(email === '' || !isValid) && (
              <p>valid email required</p>
            )
            }
          </div>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@company.com"
            required
            className={(email === '' || !isValid)&& ('valid')}
          />
          <button type="submit" onClick={handleSubmit} >
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
      <div className="newsletter-image">
        <img src={newsletter} alt="newsletter" width="300px" />
      </div>
    </div>
  );
}
