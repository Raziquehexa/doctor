import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    users: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    products: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
      required: true,
    },
    appointmentDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Appointments", appointmentSchema);
