import mongoose from "mongoose";

const { Schema, model } = mongoose;

const contactSchema = new Schema({
    last_connection_time:String,
    device_id:String,
    userId: String,
    drinks: [
      {
    timestamp:String,
    battery:String,
    meta:{
    aVel: String,
    },
    Pins:[
      {
    pin_number:String,
    timestamp:String,
    is_wet:String,
    x:String,
    y:String,
    z:String,
      },{
    pin_number:String,
    timestamp:String,
    is_wet:String,
    x:String,
    y:String,
    z:String,
      },{
    pin_number:String,
    timestamp:String,
    is_wet:String,
    x:String,
    y:String,
    z:String ,
      },{
    pinnumber:String,
    timestamp:String,
    is_wet:String,
    x:String,
    y:String,
    z:String,
      },{
    pin_number:String,
    timestamp:String,
    is_wet:String,
    x:String,
    y:String,
    z:String,
      },{
    pin_number:String,
    timestamp:String,
    is_wet:String,
    x:String,
    y:String,
    z:String 
    }]
  }]
 });

contactSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

contactSchema.set("autoIndex", true);

const Userdb = model("contactdb", contactSchema);
Userdb.createIndexes();

export default Userdb;
