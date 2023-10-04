import axios from "axios";
import React from "react";
import { useState } from "react";

const Paymenttier = ({ fetchPaymentDetails, user, token }) => {
  const [submitting, setsubmitting] = useState(false);
  const [bronze, setBbonze] = useState("");
  const [gold, setgold] = useState("");
  const [platinum, setplatinum] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const FormData = {
      bronze,
      gold,
      platinum,
    };
    try {
      const response = await axios.post("", FormData);
      if (response.status === 201) {
        onNewTier();
      }
    } catch (error) {
      console.warn("Error submitting new Tier information", error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex-item">
      <h4>Pick Which Tier of Services you prefer?</h4>
      <div>
        <label>Bronze</label>
        <input value={bronze} onChange={(e) => setbronze(e.target.value)} />
      </div>
    </form>
  );
};
