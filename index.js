  const express = require("express");
  const app = express();
  const bodyParser = require('body-parser');
  const path = require("path");
  const fs = require("fs");
  const connect=require("./src/config/dbConfig")
  const ObsModel=require("./src/models/Observation")
  const FOIModel=require("./src/models/FeatureOfInterest.js")
  const SensModel=require("./src/models/Sensor")
  const strModel=require("./src/models/Stream")
  const Thing = require("./src/models/Thing.js")
  const Location = require("./src/models/Location.js")
  const ThingLocation = require("./src/models/ThingLocation.js")
  const HistoricalLocation = require("./src/models/HistoricalLocation.js")
  const HistoryWithLocation = require("./src/models/HistoricalLocationLocation.js")





  //constants
  const DB_PATH = path.resolve("db.json");
  const PORT = process.env.PORT || 8000;
  //middlewares
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  // routes
  app.get("/", async (req, res) => {
    console.log("api is being called")
    fs.readFile(DB_PATH ,"utf-8", (err, jsonString) => {
      if (err) return console.log(err);
      let values = JSON.parse(jsonString);
      res.status(200).json({
        totalValues: values.length,
        values,
      });
    });
    
    
  });

  app.post("/Observation", async (req, res) => {
    const now = new Date();
    const formattedDate = now.toISOString();
    let body = req.body;
    const data2 =new ObsModel({ObservationID :body.ObservationID ,
      Streamname :body.Streamname , 
      RoomID :body.RoomID , 
      PhenomenonTime:body.PhenomenonTime,
      Result:body.Result});
    await data2.save()
    
    res.status(200).json({
      message:"data has been received"
    })
  });
  app.post("/Sensor", async (req, res) => {
    const now = new Date();
    const formattedDate = now.toISOString();
    let body = req.body;
    const data3 =new SensModelModel({SensorID :body.SensorID,
                                     SensorType : body.SensorType,
                                     SensorName:body.SensorName,
                                     Description:body.Description,
                                     Specifucation :{
                                      Manufacturer:body.Manufacturer,
                                      Model:body.Model,
                                      Accuracy:{Temperature:body.Temperature,
                                        Humidity:body.Hunidity,
                                          Pressure:body.Pressure}},

                                     }

                                     );
    await data3.save()
    
    res.status(200).json({
      message:"data has been received"
    })
  });
  app.post("/Stream", async (req, res) => {
    const now = new Date();
    const formattedDate = now.toISOString();
    let body = req.body;
    const data4 =new StrModel({StreamID :body.StramID,
                               ObservationType:body.ObservationType,
                               UnitOfMeasurement:body.UnitOfMeasurement,
                               timestamp :formattedDate});
    await data4.save()
    
    res.status(200).json({
      message:"data has been received"
    })
  });
  app.post("/FeatureOfIntrest", async (req, res) => {
    const now = new Date();
    const formattedDate = now.toISOString();
    let body = req.body;
    const data5 =new FOIModel({RoomID :body.RoomID,
                               Geometry:body.Geometry,
                               Description:body.Description});
    await data5.save()
    
    res.status(200).json({
      message:"data has been received"
    })
  });
  app.post("/Thing", async (req, res) => {
    const body = req.body;
    const thing = new Thing({
      Name: body.Name,
      Description: body.Description,
      Properties: body.Properties
    });
  
    await thing.save();
  
    res.status(200).json({ message: "Thing data has been received" });
  });
  app.post("/Location", async (req, res) => {
    const body = req.body;
    const location = new Location({
      Name: body.Name,
      Description: body.Description,
      Properties: body.Properties,
      EncodingType: body.EncodingType,
      Location: body.Location
    });
  
    await location.save();
  
    res.status(200).json({ message: "Location data has been received" });
  });
  app.post("/ThingLocation", async (req, res) => {
    const body = req.body;
    const thingLocation = new ThingLocation({
      id_thing: body.id_thing,
      id_location: body.id_location
    });
  
    await thingLocation.save();
  
    res.status(200).json({ message: "Thing_Location data has been received" });
  });
  app.post("/HistoricalLocation", async (req, res) => {
    const body = req.body;
    const historicalLocation = new HistoricalLocation({
      id_thing: body.id_thing,
      Time: body.Time
    });
  
    await historicalLocation.save();
  
    res.status(200).json({ message: "Historical Location data has been received" });
  });
  app.post("/HistoryWithLocation", async (req, res) => {
    const body = req.body;
    const historyWithLocation = new HistoryWithLocation({
      id_historical: body.id_historical,
      id_location: body.id_location
    });
  
    await historyWithLocation.save();
  
    res.status(200).json({ message: "HistoryWith_Location data has been received" });
  });
  











  app.listen(PORT || 8000, () => {
    console.log("Listening on port", PORT || 8000)
    connect()
  });
