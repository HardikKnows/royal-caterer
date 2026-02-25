import Razorpay from "razorpay";
import { NextResponse } from "next/server";
import { connectDB } from "../../../../../lib/db";
import Booking from "../../../../../models/Booking";

export async function POST(req: Request) {
  try {
    const { amount, venue, timeSlot, eventDate, guests } = await req.json(); // rupees

    if (!amount || !venue || !timeSlot || !eventDate) {
      return NextResponse.json(
        { message: "Missing required booking details." },
        { status: 400 }
      );
    }

    await connectDB();

    // 🔒 Prevent double booking (same venue + date + slot)
    const conflict = await Booking.findOne({
      eventDate: new Date(eventDate),
      venue,
      timeSlot,
      status: { $in: ["pending", "paid"] },
    });

    if (conflict) {
      return NextResponse.json(
        { message: "This venue and time slot is already booked. Please choose another." },
        { status: 409 } // Conflict
      );
    }

    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    const order = await razorpay.orders.create({
      amount: amount * 100, // paise
      currency: "INR",
      receipt: "order_rcpt_" + Date.now(),
      notes: {
        venue,
        timeSlot,
        eventDate,
        guests,
      },
    });

    return NextResponse.json(order);
  } catch (err) {
    console.error("Order creation failed:", err);
    return NextResponse.json({ error: "Order creation failed" }, { status: 500 });
  }
}