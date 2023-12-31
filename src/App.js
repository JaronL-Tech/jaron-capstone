// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { loadStripe } from "@stripe/stripe-js";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import AccountPage from "./pages/AccountPage/Accountpage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import PaymentForm from "./components/PaymentForm/PaymentForm";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBISHABLE_kEY);

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Payment" element={<PaymentPage />} />
        <Route path="/Account" element={<AccountPage />} />

        <Route
          path="/:Payment"
          element={
            <PrivateRoute>
              <PaymentPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/:Account"
          element={
            <PrivateRoute>
              <AccountPage />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
}

export default App;
