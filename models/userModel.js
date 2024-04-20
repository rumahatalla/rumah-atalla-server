const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  FCMToken: {
    type: [String],
  },
  resetPasswordToken: {
    token: { type: String },
    expirationDate: { type: Date },
  },
  role: {
    type: String,
    enum: ["admin", "owner", "product manager"],
    default: "admin",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  imageUrl: {
    url: { type: String },
    public_id: { type: String },
  },
  transactions: {
    type: {
      successed: {
        type: Number,
        default: 0,
      },
      pending: {
        type: Number,
        default: 0,
      },
      canceled: {
        type: Number,
        default: 0,
      },
    },
    default: {
      successed: 0,
      pending: 0,
      canceled: 0,
    },
  },
  number: {
    type: String,
  },
});

// userSchema.pre("save", async function (next) {
//   const user = this;
//   if (user.isModified("password")) {
//     const hash = await bcrypt.hash(user.password, 10);
//     user.password = hash;
//   }
//   next();
// });

// Method to compare password during login
// userSchema.methods.comparePassword = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };

const User = mongoose.model("User", userSchema);

module.exports = User;
