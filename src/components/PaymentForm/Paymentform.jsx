import react from "react";
function PaymentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const createSubscription = async () => {
    try {
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
      <button onClick={createSubscription}>
        Subscribe Bronze Tier - 5 Dollars
      </button>
      <br />
    </div>
  );
}

export default PaymentForm;
