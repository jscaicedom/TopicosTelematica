const mongoose = require("mongoose");

const { Proyecto1_MongoHOST, Proyecto1_MongoDB } = process.env;

const MONGODB_URI = `mongodb://${Proyecto1_MongoHOST}/${Proyecto1_MongoDB}`;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })

  .then(db => console.log("DB is connected"))
  .catch(err => console.error(err));