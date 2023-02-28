import { Schema, model, Document, ObjectId } from "mongoose";

export interface IUser extends Document {
    _id: ObjectId;
    email: string;
    password: string;
    name?: string;
    bio?: string;
    phone?: string;
}

const userSchema = new Schema<IUser>(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        name: { type: String },
        bio: { type: String },
        phone: { type: String },
    },
    {
        timestamps: true,
    }
);

const User = model<IUser>("User", userSchema);

export default User;
