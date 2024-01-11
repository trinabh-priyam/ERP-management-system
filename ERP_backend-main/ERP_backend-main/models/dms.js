import mongoose from "mongoose";

const dmsSchema = new mongoose.Schema({
  dmsUserName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const Dmsmessage = mongoose.model("dms", dmsSchema);

export default Dmsmessage;
