var https = require("https");
var axios = require("axios");
let keys = require("../config/keys");
let _ = require("lodash");
module.exports = app => {
  app.get("/current_user", (req, res) => {
    res.send("Modify user routes.");
  });
  app.post("/api/getthumbnails", async (req, res) => {
    console.log("req");
    let reqObj = JSON.parse(req.body.data);
    let reqPath = encodeURI(
      `/maps/api/place/textsearch/json?location=${reqObj.data.place.latitude},${
        reqObj.data.place.longitude
      }&radius=1500&query=${reqObj.data.hotelName}&key=${keys.googlePlaceKey}`
    );
    let hostPath = "maps.googleapis.com";
    console.log("making", "https://" + hostPath + reqPath);
    let ans = await axios.get("https://" + hostPath + reqPath);

    let imageRef = await ans.data.results[0].photos[0].photo_reference;
    console.log("imageRef is ", imageRef);
    let imageReqPath = encodeURI(
      `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${imageRef}&key=${
        keys.googlePlaceKey
      }`
    );
    console.log("image path is", imageReqPath);
    res.send(imageReqPath);
  });
};
