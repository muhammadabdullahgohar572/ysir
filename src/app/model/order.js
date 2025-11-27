import mongoose from "mongoose";

const patchOrderSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId },
    width: { type: String, required: true },
    height: { type: String, required: true },
    product: { type: String, required: true },
    backing: { type: String, required: true },
    quantity: { type: Number, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    instructions: { type: String },
    source: { type: String },
    budget: { type: String },
    colors: { type: String },
    urgency: { type: String },
    files: [{ type: String }], // Array of file URLs
    status: { type: String, default: "Pending" },
  },
  { timestamps: true }
);

const PatchOrder =
  mongoose.models.Order || mongoose.model("Order", patchOrderSchema);
export default PatchOrder;