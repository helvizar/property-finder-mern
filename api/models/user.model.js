import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    validate: {
      // Regex untuk validasi password
      const passwordRegex = /^(?=.*[A-Z])(?=.\d)(?=.*[!@#$%^&*(),.?":{}|<>])$/
      return passwordRegex.test(value);
    },
    message: "Password harus mengandung angka, huruf kapital, dan simbol."
  }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
