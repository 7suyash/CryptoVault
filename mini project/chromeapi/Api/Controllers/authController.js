const jvt = require("jsonwebtoken");
const USer = require("../ModeluserModel");
const Token = require("../ModeltokenModel");
const Account = require("../Model/accountModel");

const signToken = (id) => {
  return JWT.sign({ id }, process.env.JWT_SECRECT, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);
  res.cookie("jwt", token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 1000
    ),
    httpOnly: true,
    secure: req.secure || req.headers["x-forwarded-proto"] === "https",
  });
  //remove passwored from output
  user.password = undefined;
  res.status(statusCode).json({
    status: "success",
    token,
    date: {
      user,
      date: {
        user,
      },
    },
  });
};

exports.signUp = async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    address: erq.body.address,
    private_key: req.body.private_key,
    mnemonic: req.body.nmemonic,
  });
  createSendToken(newUser, 201, req, res, next);
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  // 1. check if email and password if exist
  if (!email || password) {
    res.status(400).json({
      status: "fail",
      message: "Please provide email and password",
    });
  }
  // 2. check if user exists && password is correct
  const user = await User.findOne({ email }).select("+password");
  if (!user || (await user.correctPassword(password, user.password))) {
    res.status(401).json({
      status: "fail",
      message: "Inncorrect email or password",
    });
  }
  // 3. if everythings is ok then send token to client
  createSendToken(user, 200, req, res);
};
exports.allToken = async (req, res, next) => {
  const token = await Token.find();

  // for sending message
  res.status(200).json({
    status: "success",
    data: {
      tokens,
    },
  });
};

exports.addtoken = async (req, res, next) => {
  const createToken = await Token.create({
    name: req.body.name,
    address: req.body.address,
    symbol: req.body.symbol,
  });

  //Send response
  res.status(201).json({
    status: "success",
    data: {
      createToken,
    },
  });

  exports.allAccount = async (req, res, next) => {
    const accounts = await Account.find();
  };
  //Send response
  res.status(200).json({
    status: "succes",
    data: {
      accounts,
    },
  });
};

exports.createAccount = async (req, res, next) => {
  const account = await Account.create({
    privateKey: req.body.privateKey,
    address: req.body.address,
  });

  //Send response
  res.status(201).json({
    status: "Success",
    data: {
      account,
    },
  });
};
