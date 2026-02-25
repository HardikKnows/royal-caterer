"use client";

import { useState } from "react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const VENUE_CAPACITY: Record<string, number> = {
  hazard_lounge: 200,
  eagle_nest: 25,
  skyball: 200,
  restaurant_bar: 100,
};

const VENUE_LABEL: Record<string, string> = {
  hazard_lounge: "Hazard Lounge (Up to 200)",
  eagle_nest: "Eagle Nest (Up to 25)",
  skyball: "Skyball – Terrace (Up to 200)",
  restaurant_bar: "Restaurant & Bar (Up to 100)",
};

const SLOT_LABEL: Record<string, string> = {
  A: "Slot A (9:00 AM – 3:00 PM)",
  B: "Slot B (4:00 PM – 12:00 AM)",
};

export default function EventsPage() {
  const [guests, setGuests] = useState(50);
  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [venue, setVenue] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const advanceAmount = guests * 200; // ₹200 per guest advance

  const isFormValid =
    guests >= 1 &&
    eventType &&
    eventDate &&
    venue &&
    timeSlot &&
    name.trim().length >= 2 &&
    email.includes("@") &&
    phone.trim().length >= 10;

  const handlePayAdvance = async () => {
    if (!isFormValid) {
      alert("Please fill all required details correctly.");
      return;
    }

    // ✅ Capacity validation
    const capacity = VENUE_CAPACITY[venue];
    if (capacity && guests > capacity) {
      alert(
        `The selected venue allows up to ${capacity} guests. Please reduce the number of guests or choose a different venue.`
      );
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: advanceAmount,
          venue,
          timeSlot,
          eventDate,
          guests,
        }),
      });

      const order = await res.json();

      if (!order?.id) {
        alert("Failed to create order. Try again.");
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Royal Tourism & Caterer",
        description: "Event Booking Advance",
        order_id: order.id,
        handler: async function (response: any) {
          const verifyRes = await fetch("/api/bookings/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              eventType,
              eventDate,
              guests,
              venue,
              timeSlot,
              name,
              email,
              phone,
              advanceAmount,
              razorpayOrderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
            }),
          });

          if (!verifyRes.ok) {
            alert("Payment verification failed. Please contact support.");
            return;
          }

          alert("Payment successful! Your booking is confirmed 🎉");
        },
        prefill: { name, email, contact: phone },
        notes: {
          venue: VENUE_LABEL[venue],
          timeSlot: SLOT_LABEL[timeSlot],
          guests: String(guests),
          eventDate,
        },
        theme: { color: "#0B1C2D" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-3xl font-semibold text-blue-950">
          Book Your Royal Event
        </h1>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Event Type */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Event Type *
            </label>
            <select
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="mt-1 w-full rounded-lg border p-2"
              required
            >
              <option value="">Select</option>
              <option>Birthday Party</option>
              <option>Corporate Event</option>
              <option>Private Party</option>
              <option>Golf Day Event</option>
            </select>
          </div>

          {/* Venue */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Venue *
            </label>
            <select
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              className="mt-1 w-full rounded-lg border p-2"
              required
            >
              <option value="">Select Venue</option>
              <option value="hazard_lounge">Hazard Lounge (Up to 200)</option>
              <option value="eagle_nest">Eagle Nest (Up to 25)</option>
              <option value="skyball">Skyball – Terrace (Up to 200)</option>
              <option value="restaurant_bar">Restaurant & Bar (Up to 100)</option>
            </select>
          </div>

          {/* Time Slot */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Time Slot *
            </label>
            <select
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
              className="mt-1 w-full rounded-lg border p-2"
              required
            >
              <option value="">Select Slot</option>
              <option value="A">Slot A (9:00 AM – 3:00 PM)</option>
              <option value="B">Slot B (4:00 PM – 12:00 AM)</option>
            </select>
          </div>

          {/* Event Date */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Event Date *
            </label>
            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              className="mt-1 w-full rounded-lg border p-2"
              required
            />
          </div>

          {/* Guests */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Number of Guests *
            </label>
            <input
              type="number"
              min={1}
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="mt-1 w-full rounded-lg border p-2"
              required
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Full Name *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded-lg border p-2"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Email *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border p-2"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Phone Number *
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 w-full rounded-lg border p-2"
              required
            />
          </div>
        </div>

        {/* Advance Preview */}
        <div className="mt-8 rounded-xl bg-blue-950 text-white p-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-blue-200">Advance Amount</p>
            <p className="text-2xl font-bold">₹ {advanceAmount}</p>
          </div>
          <button
            onClick={handlePayAdvance}
            disabled={!isFormValid || loading}
            className="rounded-lg bg-amber-400 px-6 py-3 font-semibold text-blue-950 hover:bg-amber-300 transition disabled:opacity-60"
          >
            {loading ? "Processing..." : "Proceed to Pay Advance"}
          </button>
        </div>
      </div>
    </div>
  );
}