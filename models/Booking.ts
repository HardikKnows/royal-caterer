import mongoose, { Schema, models, model } from "mongoose";

export type VenueType =
  | "hazard_lounge"
  | "eagle_nest"
  | "skyball"
  | "restaurant_bar";

export type TimeSlotType = "A" | "B";

export interface IBooking {
  eventType: string;
  eventDate: Date;
  eventTimestamp?: Date;

  guests: number;

  venue: VenueType;
  timeSlot: TimeSlotType;

  name: string;
  email: string;
  phone: string;

  advanceAmount: number;

  razorpayOrderId?: string;
  razorpayPaymentId?: string;
  razorpaySignature?: string;

  status: "pending" | "paid" | "failed";

  createdAt?: Date;
  updatedAt?: Date;
}

const BookingSchema = new Schema<IBooking>(
  {
    eventType: { type: String, required: true },

    // Better as Date for admin filtering & calendar
    eventDate: { type: Date, required: true, index: true },
    eventTimestamp: { type: Date },

    guests: { type: Number, required: true, min: 1 },

    // ✅ NEW: Venue
    venue: {
      type: String,
      required: true,
      enum: ["hazard_lounge", "eagle_nest", "skyball", "restaurant_bar"],
      index: true,
    },

    // ✅ NEW: Time Slot
    timeSlot: {
      type: String,
      required: true,
      enum: ["A", "B"],
      index: true,
    },

    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email"],
    },
    phone: {
      type: String,
      required: true,
      match: [/^[6-9]\d{9}$/, "Invalid Indian phone number"],
    },

    advanceAmount: { type: Number, required: true, min: 0 },

    razorpayOrderId: { type: String, index: true },
    razorpayPaymentId: { type: String, index: true },
    razorpaySignature: { type: String },

    status: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
      index: true,
    },
  },
  { timestamps: true }
);

// ✅ Optional: Compound index to prevent double bookings later
BookingSchema.index({ eventDate: 1, venue: 1, timeSlot: 1 });

export default models.Booking || model<IBooking>("Booking", BookingSchema);