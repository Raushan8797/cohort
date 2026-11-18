import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    originalUrl: {
      type: String,
      required: true,
    },
    ShortCode: {
      type: String,
      required: true,
    },
    Clicks: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);
const urlModel = mongoose.model("URLS", urlSchema);

export default urlModel;
