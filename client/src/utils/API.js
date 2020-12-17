import axios from "axios";

export default {
  searchPlants: function() {
    return axios.get("/search/:plantName");
  },
  getPlant: function(id) {
    return axios.get("/api/plants/" + id);
  },
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
  addPlant: function(plantData) {
    return axios.post("/api/plants", plantData);
  }
};


app.get("/search/:plantName", (req, res) => {
    const plantName = req.params.plantName;
    const Url = `https://trefle.io/api/v1/plants/search?q=${plantName}/?token=${process.env.TREFFLE_KEY}`;
    
    app.get("/garden", (req, res) => {
        const Url = `https://trefle.io/api/v1/plants?token=${process.env.TREFFLE_KEY}`;
        
        app.get("/plant/:id", (req, res) => {
            const plantID = req.params.id;
            const Url = `https://trefle.io/api/v1/plants/${plantId}?token=${TREFFLE_KEY}`;
            
    

