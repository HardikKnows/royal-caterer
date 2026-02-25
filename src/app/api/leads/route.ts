import { NextResponse } from "next/server";
import nodemailer from "nodemailer"
import { connectDB } from "../../../../lib/db";
import Lead from "../../../../models/Lead";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, city, guests, eventType, eventDate } = body;

    await connectDB();
    const lead = await Lead.create(body);

    // Send email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER, // your email
        pass: process.env.MAIL_PASS, // app password
      },
    });

    await transporter.sendMail({
      from: `"Royal Tourism & Caterer" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO, // your business email
      subject: "New Event Enquiry",
      html: `
        <h2>New Event Enquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>City:</b> ${city}</p>
        <p><b>Guests:</b> ${guests}</p>
        <p><b>Event:</b> ${eventType}</p>
        <p><b>Date:</b> ${eventDate}</p>
      `,
    });

    return NextResponse.json({ success: true, lead });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
// app/api/leads/route.ts (GET handler added)
export async function GET() {
    await connectDB();
    const leads = await Lead.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json({ leads });
  }