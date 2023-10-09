import axios from "axios";
import React from "react";
import { useState } from "react";

const Paymenttier = ({ fetchPaymentDetails, user, token }) => {
  const [submitting, setsubmitting] = useState(false);
  const [bronze, setbronze] = useState("");
  const [gold, setgold] = useState("");
  const [platinum, setplatinum] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setsubmitting(true);

    const FormData = {
      bronze,
      gold,
      platinum,
    };
  };
  return (
    <form onSubmit={handleSubmit} className="flex-item">
      <h4>Pick Which Tier of Services you prefer?</h4>
      <div>
        <label>Bronze</label>
        <text>"You will receive 3 items for this tier."</text>
        <input value={bronze} onChange={(e) => setbronze(e.target.value)} />
      </div>
      <div>
        <label>Gold</label>
        <text>"You will receive 5 items for this tier."</text>
        <input value={gold} onChange={(e) => setgold(e.target.value)} />
      </div>
      <div>
        <label>Platinum</label>
        <text>"You will receive 7 items for this tier."</text>
        <input value={platinum} onChange={(e) => setplatinum(e.target.value)} />
      </div>
      <button type="submit">Pick a Tier</button>
    </form>
  );
};
