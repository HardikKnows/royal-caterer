import crypto from "crypto";
import { NextResponse } from "next/server";
import { connectDB } from "../../../../../lib/db";
import Booking from "../../../../../models/Booking";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
      eventType,
      eventDate,
      guests,
      venue,
      timeSlot,
      name,
      email,
      phone,
      advanceAmount,
    } = body;

    // 🔐 Verify Razorpay signature
    const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!);
    hmac.update(razorpayOrderId + "|" + razorpayPaymentId);
    const generatedSignature = hmac.digest("hex");

    if (generatedSignature !== razorpaySignature) {
      return NextResponse.json({ message: "Invalid signature" }, { status: 400 });
    }

    await connectDB();

    // 🔒 Re-check double booking
    const conflict = await Booking.findOne({
      eventDate: new Date(eventDate),
      venue,
      timeSlot,
      status: { $in: ["paid"] }, // only block if already PAID
    });

    if (conflict) {
      return NextResponse.json(
        { message: "This slot was just booked by someone else." },
        { status: 409 }
      );
    }

    // ✅ Save booking
    await Booking.create({
      eventType,
      eventDate: new Date(eventDate),
      guests,
      venue,
      timeSlot,
      name,
      email,
      phone,
      advanceAmount,
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
      status: "paid",
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Verify error:", err);
    return NextResponse.json(
      { message: "Verification failed" },
      { status: 500 }
    );
  }
}