import axios from "axios";

export default {
  // search by plant name
  searchPlants: function() {
    return axios.get("/search/:plantName");
  },

  // get plant details by id
  plantDetail: function(id) {
    return axios.get("/plant/" + id);
  },

  // add plant
  addPlant: function(plantData) {
    return axios.post("/api/plant" + plantData)
  },

  // find user by email
  findByEmail: function (email) {
    return axios.get()
  },

  // post request using userData from google
  signInUser: function (userData) {
    return axios.post("/api/user", userData)
  }

    
};
