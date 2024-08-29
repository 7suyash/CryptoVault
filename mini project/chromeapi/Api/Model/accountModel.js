const mongoose = require("mongoose");
const accountSchema = new mongoose.Schema({
  privateKey: String,
  address: String,
});

const Account = mogoose.model("Account", accountSchema);
module.exports = Account;
