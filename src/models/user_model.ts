import * as mongoose from "mongoose";

const userSchema: mongoose.Schema = new mongoose.Schema<any>({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export const userModel = mongoose.model("user", userSchema);