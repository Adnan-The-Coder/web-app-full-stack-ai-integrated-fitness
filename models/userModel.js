import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please Provide a UserName"],
        unique: false,
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
            required: false,
        },
        weight: {
            type: Number, // in kg
            required: false,
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
            required: false,
        },
        description: {
            type: String, // Description of the health record
            required: false,
        },
        doctorName: String, // Optional field for doctor's name
    }],
    age: {
        type: Number, // Age of the user
        required: false, // Not required
    },
    gender: {
        type: String, // Gender of the user
        required: false, // Not required
        enum: ['male', 'female', 'non-binary', 'other'], // Optional: restrict to specific values
    },
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
