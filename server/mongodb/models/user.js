import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {},
  email: {},
  avatar: {},
  allProperties: [{ type: mongoose.Schema.Types.ObjectId, ref: "Property" }],
});

const userModel = mongoose.model("User", UserSchema);

export default userModel;
