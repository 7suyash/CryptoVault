
const mongoose = require("mongoose");
const bcrypt = require("bcrypt.js");
const userSchems = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please tell us your name: "],
    },
    email: {
        type: String,
        required: [true, "PLease proivde your email: "],
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, "PLease proivde your password: "],
    },
    passwordConfirm: {
        type: String,
        required: [true, "PLease confirm your password: "],
        validate: {
            validator: function (el) {
                return el == this.password;
            },
            message: "Passwords are not the same!!",
        },
    },
    address: String,
    private_Key: String,
    mnemonic: String
});

userSchema.pre("save", async function (next) {
    //only if password was acctually modified
    if (!this.isModified("password")) return next();
    this.passwordConfirm = undefined;
    next();
});

userSchema.pre(/^find/, function (next) {
    this.find({ active: { $ne: false } });
    next();
});

userSchema.methods.correctPassword = async function (
    candidatePassword,
    userPassword
) {
    return await brcrypt.compare(candidatePassword, userPassword);
};
userSchema.methods.changePasswordAfter = function (JWTTimestamp) {
    if (this.passwordChangedAt){
        const changedTimestamp = parseInt(
            this.passwordChangedAt.getTime() / 1000,10)

        return JWTTimestamp <changedTimestamp;
};

return false;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
