import React, { useState } from "react";
import "./Newsletter.scss";
import axios from "axios";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://us1.api.mailchimp.com/3.0/lists/YOUR_LIST_ID/members",
        {
          email_address: email,
          status: "pending",
        },
        {
          headers: {
            Authorization: "apikey YOUR_API_KEY",
          },
        }
      );
      setSuccess(true);
      setEmail("");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="newsletter">
      <h2>Subscribe to our newsletter</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>
      {success && <p>Thank you for subscribing!</p>}
      {error && <p>There was an error subscribing. Please try again later.</p>}
    </div>
  );
};

export default Newsletter;
