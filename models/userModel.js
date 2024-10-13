import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please Provide a UserName"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please Provide an Email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please Provide a Password"],
        unique: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: String,
    verifyToken: String,
    verifyTokenExpiry: Date,

    dietaryPreferences: {
        type: [String], // Array of dietary preference strings, e.g., ["vegetarian", "gluten-free"]
    },
    ingredientAvailability: {
        type: [String], // Array of ingredients available, e.g., ["chicken", "broccoli"]
    },
    healthParameters: {
        height: {
            type: Number, // in cm
            required: true,
        },
        weight: {
            type: Number, // in kg
            required: true,
        },
        bloodPressure: {
            systolic: Number,
            diastolic: Number,
        },
        allergies: {
            type: [String], // Array of allergies, e.g., ["nuts", "dairy"]
        },
    },
    healthRecords: [{
        date: {
            type: Date,
            required: true,
        },
        description: {
            type: String, // Description of the health record
            required: true,
        },
        doctorName: String, // Optional field for doctor's name
    }],
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
