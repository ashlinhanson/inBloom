import axios from "axios";
import fetch from 'node-fetch';

export default {
  // search by plant name
  // searchPlants: function(plantName) {
  //   console.log("THIS IS A PLANTNAME " + plantName);
  //   return axios.get("/search/" + plantName);
  // },

  // // get plant details by id
  // plantDetail: function(id) {
  //   return axios.get("/plant/" + id);
  // },

    searchPlants: (query) => {
        return axios.get('/api/trefle/search/'+ query);
      },
    //     const plantName = req;
    //     console.log("THIS IS THE NAME " + plantName);
    //     const Url = `https://trefle.io/api/v1/plants/search?q=${plantName}/?token=YAJT0mak-g3CsuHS4YDL0iQPaeNCXHGRiwju5gkz-zM`;
    //     console.log("THE DUMB URL " + Url)
    //     axios.get(Url, {
    //       // params: {
    //       //   plantName: plantName
    //       // }
    //     })
    //     .then((result) => {
    //         res.json(result.data.items);
    //     }).catch(err => {
    //         console.log(err);
    //     });
    

    plantDetail : function (req, res) {
        const plantID = req.params.id;
        const Url = `https://trefle.io/api/v1/plants/${plantID}?token=${process.env.TREFFLE_KEY}`;
        

        axios.get(Url).then((result) => {
            res.json(result.data.items);
        }).catch(err => {
            console.log(err);
        });
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
