import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
    },
    role: {
        type: String,
        default: "user",
    },
    image: {
        type: String,
        default: "/images/profile.png",
    },
    email_verified: {
        type: Boolean,
        default: false,
    },
    defaultPaymentMethod: {
        type: String,
        default: "",
    },
    address: [
        {
            firstName: {
                type: String,
            },
            lastName: {
                type: String,
            },
            country: {
                type: String,
            },
            streetAddress: {
                type: String,
            },
            city: {
                type: String,
            },
            state: {
                type: String,
            },
            zipCode: {
                type: String,
            },
            phoneNumber: {
                type: String,
            },
            deliverInstructions: {
                type: String,
            },
            active: {
                type: Boolean,
                default: false,
            },
        },
    ]
}, {
    timestamps: true,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;