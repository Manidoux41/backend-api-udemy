import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import pkg from 'validator';

const { isEmail } = pkg;

const UserSchema = new mongoose.Schema({
    pseudo: {
        type: String,
        required: true, 
        minLength: 3,
        maxLength: 55,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        validate: [isEmail],
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        minLength: 6
    },
    bio: {
        type: String,
        max: 1024
    },
    picture: {
        type: String,
        default: "./uploads/profil/random-user.png"
    },
    followers: {
        type: [String]
    },
    following: {
        type: [String]
    },
    likes: {
        type: [String]
    }       
},
{
    timestamps: true
} 
);

// play function before save into db: 'block'

UserSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

const User = mongoose.model('User', UserSchema)

export default User;