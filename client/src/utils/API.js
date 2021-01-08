import axios from "axios";


export default {

  searchPlants: (query) => {
    return axios.get('/api/trefle/search/' + query);
  },

  plantDetail: (id) => {
    return axios.get('/api/trefle/detail/' + id);
  },


  // add plant
  addPlant: function (plantData) {
    return axios.post("/api/plant", plantData);
  },

  // post request using userData from google
  signInUser: function (userData) {
    return axios.post("/api/user", userData)
  },

  searchUserById: function (id) {
    return axios.get("/api/user/" + id)
  }


};