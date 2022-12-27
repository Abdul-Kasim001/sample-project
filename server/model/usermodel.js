import mongoose from "mongoose";

const { Schema,model } = mongoose;

const userSchema = new Schema({
  Id: {
    type: String,
    required: false,
  },
  Email: {
    type: String,
    required: false,
  },
  Name: {
    type: String,
    required: false,
  },
  Password: {
    type: String,
    required: false,
  },
  },
  
   { timestamps: true
  
 
});

userSchema.method("toJSON", function () {
  const { _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

userSchema.set("autoIndex", true);

const Userdb = model("userdb", userSchema);

export default Userdb;
