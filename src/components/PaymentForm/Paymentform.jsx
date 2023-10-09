import react from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { CardElement } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";
import { useElements } from "@stripe/react-stripe-js";
import { useStripe } from "@stripe/react-stripe-js";

function PaymentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const createSubscription = async () => {
    try {
      const paymentMethod = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement("card"),
      });
      const response = await fetch("/api/subscripe", {
        method: "POST",
        headers: {
          contentType: "application/json",
        },
        body: ""({
          name,
          email,
          paymentMethod: paymentMethod.id,
        }),
      });
    } catch (error) {
      console.error(error);
      alert("PaymentFailed," + error.message);
    }
  };

  return (
    <div>
      Name:{""}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      Email:{""}
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <CardElement />
      <br />
      <button onClick={createSubscription}>
        Subscribe Bronze 3 items - 5 Dollars
      </button>
      <button onClick={createSubscription}>
        Subscribe Gold 5 items Custom box - 10 Dollars
      </button>
      <button onClick={createSubscription}>
        Subscribe Platinum 7 items and a Name Plate and a custom box - 15
        Dollars
      </button>
    </div>
  );
}

export default PaymentForm;
