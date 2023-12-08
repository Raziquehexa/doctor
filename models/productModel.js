import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.ObjectId,
      ref: "Category",
      required: true,
    },

    photo: {
      data: Buffer,
      contentType: String,
    },

    timeSlots: [
      {
        startTime: String,
        endTime: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Products", productSchema);
