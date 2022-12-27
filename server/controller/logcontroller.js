import Userdb from "../model/logmodel.js"

export async function create(req, res, next) {
  try {
   const data = req.body;
  
    console.log("data", data);
      const details = {
      device_id:data.device_id ,
      app_version:data.app_version,
      hardware_version:data.hardware_version,
      firmware_version:data. firmware_version,
      location_permissions:data.location_permissions,
      bluetooth_permissions:data.bluetooth_permissions,
      last_connected:data.last_connected,
      userId: data.userId,
      contact:{
      Name:data.Name, 
      Email:data.Email,
      Mobile: data.Mobile, 
      Message: data.Message, 
      userId:data.userId
      }
}
 
  const createUser = await Userdb.create(data);
  res.status(201).json({
      message: "create successfully",
      data: createUser,
    });
  
  } 
  catch (err) {
    console.log(err);
    next();
  }
}

// retrieve and return all users/ retrive and return a single user
export async function find(req, res) {
  if (req.query.id) {
    const id = req.query.id;

    Userdb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Not found user with id " + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Erro retrieving user with id " + id });
      });
  } else {
    Userdb.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Error Occurred while retriving user information",
        });
      });
  }
}

// Update a new idetified user by user id
export async function update(req, res) {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }

  const id = req.params.id;
  Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot Update user with ${id}. Maybe user not found!`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Update user information" });
    });
}

// Delete a user with specified user id in the request
export async function empdelete(req, res) {
  const id = req.params.id;

  Userdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` });
      } else {
        res.send({
          message: "User was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with id=" + id,
      });
    });
}
