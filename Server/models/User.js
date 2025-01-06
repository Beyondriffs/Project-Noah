// Import the Mongoose library
const mongoose = require("mongoose")
const Privacy = require("./Privacy")

// Define the user schema using the Mongoose Schema constructor
const userSchema = new mongoose.Schema(
  {
    // Define the name field with type String, required, and trimmed
    Username: {
      type: String,
      required: true,
      trim: true,
    },

    // Define the email field with type String, required, and trimmed
    email: {
      type: String,
      required: true,
      trim: true,
    },

    // Define the password field with type String and required
    password: {
      type: String,
      required: true,
    },
    // Define the role field with type String and enum values of "Admin", "Student", or "Visitor"
    accountType: {
      type: String,
      enum: ["Admin", "Student", "Teacher"],
      required: true,
    },
    Privacy: {
      type: mongoose.Schema.Types.ObjectId,
      // required: true,
      ref: "Privacy",
    },
    Notification: {
      type: mongoose.Schema.Types.ObjectId,
      // required: true,
      ref: "Notification",
    },
    Synchronisation: {
      type: mongoose.Schema.Types.ObjectId,
      // required: true,
      ref: "Synchronisation",
    },
    
  },
  { timestamps: true }
)

// Export the Mongoose model for the user schema, using the name "user"
module.exports = mongoose.model("user", userSchema)
