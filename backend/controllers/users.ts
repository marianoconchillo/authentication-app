import { Request, Response } from "express";
import mongoose, { ObjectId } from "mongoose";
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User, { IUser } from "../models/user";
import { uploadImage } from "../utils/cloudinary";

// @desc    Register new user
// @route   POST /api/users
// @access  Public
export const registerUser = asyncHandler(
    async (req: Request, res: Response) => {
        const { email, password, name, bio, phone } = req.body;

        if (!email || !password) {
            res.status(400).json({
                msg: "Please add all fields",
            });
        }

        // Check if user exists
        const userExists = await User.findOne({ email });

        if (userExists) {
            res.status(400).json({
                msg: "User already exists",
            });
        }

        // Hash password
        const saltRounds: number = 10;
        const salt: string = await bcrypt.genSalt(saltRounds);
        const hashedPassword: string = await bcrypt.hash(password, salt);

        const user: IUser = await User.create({
            email: email || "",
            password: hashedPassword,
            name: name || "",
            bio: bio || "",
            phone: phone || "",
            pictureUrl: "2",
        });

        if (user) {
            res.status(201).json({
                _id: user._id,
                email: user.email,
                token: generateToken(user._id),
            });
        } else {
            res.status(400).json({
                msg: "Invalid user data",
            });
        }
    }
);

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
export const loginUser = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({
            msg: "Please add all fields",
        });
    }

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user._id,
            email: user.email,
            name: user.name,
            bio: user.bio,
            phone: user.phone,
            token: generateToken(user._id),
        });
    } else {
        res.status(400).json({
            msg: "Invalid credentials",
        });
    }
});

// @desc    Get user data
// @route   PATCH /api/users/:id
// @access  Private
export const updateUser = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, bio, phone, password } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ msg: "Invalid user ID" });
    }

    // Image
    if (req.files?.image) {
        console.log(req.files.image);
    }

    let user: IUser | null = await User.findById(id);

    if (user) {
        user.name = name || user.name;
        user.bio = bio || user.bio;
        user.phone = phone || user.phone;

        const updatedUser: IUser = await user.save();

        res.status(200).json({
            _id: updatedUser._id,
            email: updatedUser.email,
            name: updatedUser.name,
            bio: updatedUser.bio,
            phone: updatedUser.phone,
            token: generateToken(updatedUser._id),
        });
    } else {
        res.status(404).json({
            msg: "User not found",
        });
    }
});

// Generate JWT
const generateToken = (id: ObjectId) => {
    if (process.env.JWT_SECRET) {
        return jwt.sign({ id }, process.env.JWT_SECRET, {
            expiresIn: "30d",
        });
    } else {
        throw new Error("JWT secret is not defined");
    }
};
