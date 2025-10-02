import mongoose from "mongoose";

try {
  await mongoose.connect(
    "mongodb+srv://ankitmauryacoder:nqZrFW1HTnBMEFTo@cluster0.akv6x97.mongodb.net/Paytm"
  );
  console.log("✅ MongoDB connected");
} catch (error) {
  console.error("❌ MongoDB connection error:", error);
}

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: { type: String, required: true, minLength: 6 },
  firstName: { type: String, required: true, trim: true, maxLength: 50 },
  lastName: { type: String, required: true, trim: true, maxLength: 50 },
});

export const UserModel = mongoose.model("User", userSchema);
