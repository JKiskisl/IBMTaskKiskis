import mongoose from "mongoose";

const actionSchema = new mongoose.Schema({
  type: String,
  crypto: String,
  timestamp: { type: Date, default: Date.now },
});

const Action = mongoose.model("Action", actionSchema);

export default Action;
