const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a department name!"],
    unique: true,
    trim: true,
    maxlength: [
      40,
      "A department name must have less or equal then 40 characters",
    ],
    minlength: [
      3,
      "A department name must have more or equal then 3 characters",
    ],
  },
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name!"],
    trim: true,
    maxlength: [40, "A user name must have less or equal then 40 characters"],
    minlength: [3, "A user name must have more or equal then 3 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email!"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email!"],
  },
  matno: {
    type: String,
    required: [true, "Please provide your matriculation number!"],
    unique: true,
    validator: {
      validator: function (el) {
        return el.match(/^ENG[0-9]{7}$/);
      },
      message: "Please provide a valid matriculation number!",
    },
  },
  password: {
    type: String,
    required: [true, "Please provide a password!"],
    minlength: [8, "A password must have more or equal then 8 characters"],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password!"],
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not the same!",
    },
  },
  otp: {
    type: String,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  department: departmentSchema,
});

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name!"],
    trim: true,
    maxlength: [40, "A user name must have less or equal then 40 characters"],
    minlength: [3, "A user name must have more or equal then 3 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email!"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email!"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password!"],
    minlength: [8, "A password must have more or equal then 8 characters"],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password!"],
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not the same!",
    },
  },
  otp: {
    type: String,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    enum: ["superadmin", "admin"],
    default: "admin",
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
});

// Encrypt the user password before saving the user to the database
userSchema.pre("save", async function (next) {
  // Only run this function if the password was actually modified
  if (!this.isModified("password")) return next();

  // Hash the password with a cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete the passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

// Compare the provided password with the user's password
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = async function (tokenIssuedAt) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    return tokenIssuedAt < changedTimestamp;
  }

  // False means NOT changed
  return false;
};

adminSchema.pre("save", async function (next) {
  // Only run this function if the password was actually modified
  if (!this.isModified("password")) return next();

  // Hash the password with a cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete the passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

// Compare the provided password with the user's password
adminSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

adminSchema.methods.changedPasswordAfter = async function (tokenIssuedAt) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    return tokenIssuedAt < changedTimestamp;
  }

  // False means NOT changed
  return false;
};

const User = mongoose.model("User", userSchema);
const Department = mongoose.model("Department", departmentSchema);
const Admin = mongoose.model("Admin", adminSchema);

module.exports = { User, Department, Admin };
