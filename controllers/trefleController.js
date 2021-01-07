const axios = require('axios');

module.exports = {
    searchPlants: function (req,res){
        const plantName = req.params.plantName;
        
        const Url = `https://trefle.io/api/v1/plants/search?q=${plantName}&token=${process.env.TREFFLE_KEY}`;
        axios
        .get(Url)
        .then((result) => {
            console.log(result)
            res.json(result.data.data);
        }).catch(err => {
            console.log(err);
        });
    },

    plantInfo : function (req, res) {
        const plantID = req.params.id;
        const Url = `https://trefle.io/api/v1/plants/${plantID}?token=${process.envTREFFLE_KEY}`;
        

        axios.get(Url).then((result) => {
            res.json(result.data.items);
        }).catch(err => {
            console.log(err);
        });
    }
}


