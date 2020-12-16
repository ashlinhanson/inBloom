import axios from "axios";

export default {
  getPlants: function() {
    return axios.get("/api/plants");
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
