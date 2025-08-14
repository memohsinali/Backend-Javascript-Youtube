import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true,"Username is required"],
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required:[true,"Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullname: {
      type: String,
      required:[true,"Fullname is required"],
      trim: true,
      index: true,
    },
    avatar: {
      type: String, // cloudinary url
      required:[true,"Avatar is required"],
    },
    coverImage: {
      type:String, //cloudinary url
    },
    watchHistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"Video",
        }
    ],
    password:{
        type:String,
        required:true[true,"Password is required"]
    },
    refreshToken:{
        type:String,
    }
  },
  {
    timestamps:true,
  }
);

export const User = mongoose.modelNames("User", userSchema);
