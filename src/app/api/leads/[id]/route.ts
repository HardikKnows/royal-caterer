// src/app/api/leads/[id]/route.ts
import { NextResponse } from "next/server";
import { connectDB } from "../../../../../lib/db";
import Lead from "../../../../../models/Lead";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const { id } = params;
    const { status } = await request.json();

    const updated = await Lead.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    return NextResponse.json({ success: true, lead: updated });
  } catch (error) {
    console.error("PATCH /api/leads/[id] error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update lead" },
      { status: 500 }
    );
  }
}