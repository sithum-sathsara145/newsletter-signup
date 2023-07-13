import React from "react";
import "./newsletter.css";
import newsletter from "../assets/images/illustration-sign-up-desktop.svg";
import iconlist from '../assets/images/icon-list.svg'

export default function Newsletter() {
  return (
    <div className="newsletter">
      <div className="newsletter-content">
        <h1>Stay updated!</h1>
        
        <p>
          Join 60,000+ product managers receiving monthly updates on:
          <div className="ticklist">
            <div> <img src={iconlist} alt="tick"  /> Product discovery and building what matters</div>
            <div><img src={iconlist} alt="tick"  />Measuring to ensure updates are a success </div>
            <div><img src={iconlist} alt="tick"  />And much more!</div>
          </div>
        </p>
        <form >
          <label htmlFor="email" >Email address</label>
          <input type="email" name="email" id="email"  placeholder="email@company.com"/>
          <button type="submit">Subscribe to monthly newsletter</button>
        </form>
         
      </div>
      <div className="newsletter-image">
        <img src={newsletter} alt="newsletter" width="300px" />
      </div>
    </div>
  );
}
