const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema(
  {
    recipients: [{ type: mongoose.Types.ObjectId, ref: "user" }],
    text: { type: String },
    media: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("conversation", conversationSchema);
