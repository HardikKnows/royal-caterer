"use client";
import { useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  city: string;
  guests: string;
  eventType: string;
  eventDate: string;
  venue: string;
  timeSlot: string;
};

const VENUE_CAPACITY: Record<string, number> = {
  hazard_lounge: 200,
  eagle_nest: 25,
  skyball: 200,
  restaurant_bar: 100,
};

export default function PlanEventModal({ open, onClose }: Props) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    city: "",
    guests: "",
    eventType: "",
    eventDate: "",
    venue: "",
    timeSlot: "",
  });

  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    if (!form.venue || !form.timeSlot) {
      alert("Please select venue and time slot.");
      return;
    }

    const guestsCount = Number(form.guests || 0);
    const capacity = VENUE_CAPACITY[form.venue];

    if (capacity && guestsCount > capacity) {
      alert(
        `Selected venue capacity is ${capacity}. Please reduce guest count or choose another venue.`
      );
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to submit");

      const venueLabel: Record<string, string> = {
        hazard_lounge: "Hazard Lounge (up to 200)",
        eagle_nest: "Eagle Nest (up to 25)",
        skyball: "Skyball – Terrace (up to 200)",
        restaurant_bar: "Restaurant & Bar (up to 100)",
      };

      const slotLabel: Record<string, string> = {
        A: "Slot A (9:00 AM – 3:00 PM)",
        B: "Slot B (4:00 PM – 12:00 AM)",
      };

      const msg = `New Enquiry:
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Event: ${form.eventType}
Date: ${form.eventDate}
Venue: ${venueLabel[form.venue]}
Time Slot: ${slotLabel[form.timeSlot]}
Guests: ${form.guests}
City: ${form.city}`;

      window.open(
        `https://wa.me/919818867732?text=${encodeURIComponent(msg)}`,
        "_blank"
      );

      alert("Thanks! We’ll contact you shortly.");
      onClose();

      setForm({
        name: "",
        email: "",
        phone: "",
        city: "",
        guests: "",
        eventType: "",
        eventDate: "",
        venue: "",
        timeSlot: "",
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm px-3 sm:px-4">
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#121826] p-4 sm:p-6 md:p-8 text-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-3 sm:right-4 top-3 sm:top-4 text-gray-300 hover:text-white text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">
          Plan Your Event
        </h2>
        <p className="mt-1 sm:mt-2 text-center text-sm sm:text-base text-gray-400">
          Fill in the details and we’ll get back to you
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-4 sm:mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4"
        >
          <input className="input" placeholder="Your Name *" name="name" value={form.name} onChange={handleChange} required />
          <input className="input" placeholder="Email Address *" name="email" value={form.email} onChange={handleChange} required />
          <input className="input" placeholder="Phone No. *" name="phone" value={form.phone} onChange={handleChange} required />
          <input className="input" placeholder="City *" name="city" value={form.city} onChange={handleChange} />

          <input className="input" placeholder="No. of Guests *" name="guests" value={form.guests} onChange={handleChange} required />

          <select className="input" name="venue" value={form.venue} onChange={handleChange} required>
            <option value="">Select Venue *</option>
            <option value="Party_lawn">Party Lawn (200+)</option>
            <option value="hazard_lounge">Hazard Lounge (Up to 200)</option>
            <option value="eagle_nest">Eagle Nest (Up to 25)</option>
            <option value="skyball">Skyball – Terrace (Up to 200)</option>
            <option value="restaurant_bar">Restaurant & Bar (Up to 100)</option>
          </select>

          <select className="input" name="timeSlot" value={form.timeSlot} onChange={handleChange} required>
            <option value="">Select Time Slot *</option>
            <option value="A">Slot A (9:00 AM – 3:00 PM)</option>
            <option value="B">Slot B (4:00 PM – 12:00 AM)</option>
          </select>

          <select className="input" name="eventType" value={form.eventType} onChange={handleChange} required>
            <option value="">Event Type *</option>
            <option>Reception Party</option>
            <option>Corporate Event</option>
            <option>Marriage Anniversary</option>
            <option>Haldi/Mehndi Function</option>
            <option>Cultural Events</option>
            <option>Birthday Party</option> 
            <option>Golf Tournament</option>
            <option>Kitty Party</option>
            <option>others</option>
          </select>

          <input
            type="date"
            className="input md:col-span-2"
            name="eventDate"
            value={form.eventDate}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 mt-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 py-2.5 sm:py-3 font-semibold text-black hover:from-yellow-500 hover:to-yellow-600 transition disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}