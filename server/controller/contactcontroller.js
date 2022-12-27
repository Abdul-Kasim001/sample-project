import Userdb from "../model/contactmodel.js";

export async function userContact(req, res, next) {
  try {
    const data = req.body;
   
    console.log("data",data);
    const details = {
      last_connection_time:data.last_connected,
      device_id:data.device_id ,
      userId: data.userId,
      Drink:[
        {
      timestamp:data.timestamp, 
      battery:data.battery,
      meta: {
        aVel: data.aVel
      },
    Pins:[
        {
      
        pin_number:data.pin_number,
        timestamp:data.timestamp,
        is_wet:data.is_wet,
        x:data.x,
        y:data.y,
        z:data.z
      }
      
      ,{
        pin_number:data.pin_number,
        timestamp:data.timestamp,
        is_wet:data.is_wet,
        x:data.x,
        y:data.y,
        z:data.z
      }
      ,{
        pin_number:data.pin_number,
        timestamp:data.timestamp,
        is_wet:data.is_wet,
        x:data.x,
        y:data.y,
        z:data.z 
      },{
      
        pin_number:data.pin_number,
        timestamp:data.timestamp,
        is_wet:data.is_wet,
        x:data.x,
        y:data.y,
        z:data.z
      },{
      
      
        pin_number:data.pin_number,
        timestamp:data.timestamp,
        is_wet:data.is_wet,
        x:data.x,
        y:data.y,
        z:data.z
      
      },{
        pin_number:data.Pin_number,
        timestamp:data.timestamp,
        is_wet:data.is_wet,
        x:data.x,
        y:data.y,
        z:data.z 
      },
    ]
    }
]
}

    const createUser = await Userdb.create(data);
    res.status(201).json({
      message: "create successfully",
      data: createUser,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function getList(req, res, next) {
  try {
    const getemployeelist = await Userdb.find();
    res.status(200).json({
      message: "get successfully",
      data: getemployeelist,
    });
  } catch (err) {
    next();
  }
}

export async function updateContact(req, res, next) {
  try {
    const data = req.body;
    const id = data.id;

    const details = {
      last_connected:data.last_connected,
      device_id:data.device_id ,
      userId: data.userId,
      Drink:[
        {
      timestamp:data.timestamp, 
      battery:data.battery,
      meta: {
        aVel: data.aVel
      },
    Pins:[
        {
      
        pin_number:data.pin_number,
        timestamp:data.timestamp,
        is_wet:data.is_wet,
        x:data.x,
        y:data.y,
        z:data.z
      }
      
      ,{
        pin_number:data.pin_number,
        timestamp:data.timestamp,
        is_wet:data.is_wet,
        x:data.x,
        y:data.y,
        z:data.z
      }
      ,{
        pin_number:data.pin_number,
        timestamp:data.timestamp,
        is_wet:data.is_wet,
        x:data.x,
        y:data.y,
        z:data.z 
      },{
      
        pin_number:data.pin_number,
        timestamp:data.timestamp,
        is_wet:data.is_wet,
        x:data.x,
        y:data.y,
        z:data.z
      },{
      
      
        pin_number:data.pin_number,
        timestamp:data.timestamp,
        is_wet:data.is_wet,
        x:data.x,
        y:data.y,
        z:data.z
      
      },{
        pin_number:data.Pin_number,
        timestamp:data.timestamp,
        is_wet:data.is_wet,
        x:data.x,
        y:data.y,
        z:data.z 
      },
    ]
    }
]
      
    };
    const updateList = await Userdb.findByIdAndUpdate(id, data);
    res.status(200).json({
      message: "create successfully",
      data: updateList,
    });
  } catch (err) {
    next();
  }
}

export async function deleteContact(req, res, next) {
  try {
    const data = req.params;
    const ContactId = data.id;
    const ContactDelete = await Userdb.findByIdAndDelete(ContactId);
    res.status(200).json({
      message: "Deleted Successfully",
      data:ContactDelete,
    });
  } catch (error) {
    next();
  }
}
