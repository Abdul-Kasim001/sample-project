import mongoose from "mongoose";
const { Schema,model } = mongoose;
const schema = new Schema({
    device_id:String,
    app_version: String,
    bluetooth_permissions: String, 
    contact: String,
    firmware_version: String, 
    hardware_version: String,
    last_connected: String, 
    location_permissions:String ,
    userId:String,
    contact:{
    Name:String,
    Email:String,
    Mobile: String, 
    Message:String, 
    userId:String
    }
})
schema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});
schema.set("autoIndex", true);

const Userdb = model("logdb", schema);







export default Userdb;
