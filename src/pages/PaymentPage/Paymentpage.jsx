import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import PaymentForm from "../../components/PaymentForm/PaymentForm";
import Subscription from "../../components/Subscription/Subscription";

const PaymentPage = ({}) => {
  const { PaymentId } = useParams();
  const [user, token] = useAuth();
  const [Payment, setPayment] = useState();
  const [submitting, setsubmitting] = useState();

  useEffect(() => {
    getPayment();
  }, [PaymentId]);
  async function getPayment() {
    let response = await axios.get(
      `https://buy.stripe.com/test_bIYcPc9n23ECa2I5kk`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log(response);
    setPayment(response.data);
  }
  return (
    <div>
      {Payment ? (
        <div>
          {""}
          <PaymentForm PaymentForm={PaymentForm} />

          <Subscription Subscription={Subscription} />
        </div>
      ) : null}
    </div>
  );
};

export default PaymentPage;
