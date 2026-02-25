import { NextResponse } from "next/server";
import { connectDB } from "../../../../../lib/db";
import Lead from "../../../../../models/Lead";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { status } = await req.json();

    await connectDB();
    const lead = await Lead.findByIdAndUpdate(
      params.id,
      { status },
      { new: true }
    );

    return NextResponse.json({ success: true, lead });
  } catch (err) {
    console.error("Update lead status error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}