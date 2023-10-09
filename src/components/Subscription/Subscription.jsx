import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  try {
    if (req.method != "POST") return res.status(400);
    const { name, email, paymentmethod } = req.body;
    const customer = await stripe.customers.create({
      email,
      name,
      payment_method: paymentmethod,
      invoice_prefix: { default_payment_method: paymentmethod },
    });
    const product = await Stripe.ProductsResource.create({
      name: "Monthly Subscription",
    });
    const Subscription = await stripe.subscriptionSchedules.create({
      customer: customer.id,
      items: [
        {
          price_data: {
            currency: "Dollar",
            product: (product.id = price_1NyIOPGGLigtusqqQ1T6ahAW),
            unit_amount: "5",
            recurring: {
              setInterval: "month",
            },
          },
        },
      ],
      payment_setting: {
        payment_method_options: ["card"],
        save_default_payment_method: "on_subscription",
      },
      expand: ["latest_invoice.payment_intent"],
    });
    res.json({
      message: "Subscription Successful!",
      clientSecret: Subscription.latest_invoice.payment_intent.client_secert,
      SubscriptionId: Subscription.id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
