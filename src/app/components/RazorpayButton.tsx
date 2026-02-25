"use client";

export default function RazorpayButton({ amount }: { amount: number }) {
  const handlePayment = async () => {
    const res = await fetch("/api/razorpay/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });

    const order = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Royal Tourism & Caterer",
      description: "Event Booking Advance",
      order_id: order.id,
      handler: function (response: any) {
        alert("Payment successful!");
        console.log("Payment Response:", response);
      },
      theme: {
        color: "#0B1C2D", // Imperial sapphire
      },
    };

    // @ts-ignore
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button
      onClick={handlePayment}
      className="rounded-lg bg-amber-400 px-6 py-3 font-semibold text-blue-950 hover:bg-amber-300 transition"
    >
      Pay Advance ₹{amount}
    </button>
  );
}
