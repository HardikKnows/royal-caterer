// models/Lead.ts
import mongoose, { Schema, models, model } from "mongoose";

const LeadSchema = new Schema(
  {
    name: String,
    email: String,
    phone: String,
    city: String,
    guests: String,
    eventType: String,
    eventDate: String,
    status: {
      type: String,
      enum: ["new", "contacted", "not_interested", "converted"],
      default: "new",
    },
  },
  { timestamps: true }
);

export default models.Lead || model("Lead", LeadSchema);