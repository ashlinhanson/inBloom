import axios from "axios";

export default {
  searchPlants: (query) => {
    return axios.get("/api/trefle/search/" + query);
  },

  plantInfo: (query) => {
    return axios.get("/api/trefle/search/" + query);
  },

  // add plant
  addPlant: function (plantData) {
    return axios.post("/api/plant", plantData);
  },

  // find user by id
  findById: function (id) {
    return axios.get();
  },

  // post request using userData from google
  signInUser: function (userData) {
    return axios.post("/api/user", userData);
  },
};
