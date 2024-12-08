import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    class: mongoose.Schema.Types.String
});

export const Users = mongoose.model("Users", UserSchema);