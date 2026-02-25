import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/db";
import Booking from "../../../../models/Booking";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    await connectDB();

    const booking = await Booking.create({
      eventType: data.eventType,
      eventDate: data.eventDate,
      guests: data.guests,
      name: data.name,
      email: data.email,
      phone: data.phone,
      advanceAmount: data.advanceAmount,
      razorpayOrderId: data.razorpayOrderId,
      razorpayPaymentId: data.razorpayPaymentId,
      razorpaySignature: data.razorpaySignature,
      status: "paid",
    });

    return NextResponse.json({ success: true, booking });
  } catch (err) {
    console.error("Save booking error:", err);
    return NextResponse.json({ error: "Failed to save booking" }, { status: 500 });
  }
}
