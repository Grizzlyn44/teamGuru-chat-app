import mongoose, { Schema, model, models } from "mongoose"

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        required: true,
    },
    emailVerified: {
        type: String,
    },
    createdAt: {
        type: String,
        required: true,
    },
    updatedAt: {
        type: String,
        required: true,
    },
    isNewUser: {
        type: Boolean,
        required: false,
    }
})

export default models.User || model("User", UserSchema)