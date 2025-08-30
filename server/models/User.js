// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true }, // Firebase UID
  email: { type: String, required: true },
  name: String
}, { timestamps: true });

const postSchema = new mongoose.Schema({
  postdata: { type: Object }
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);
export const post = mongoose.model('postSchema', postSchema);
