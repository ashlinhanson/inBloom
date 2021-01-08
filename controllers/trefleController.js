const axios = require('axios');

module.exports = {
    searchPlants: function (req,res){
        const plantName = req.params.plantName;
        const Url = `https://trefle.io/api/v1/plants/search?q=${plantName}&token=${process.env.TREFFLE_KEY}`;
        axios
        .get(Url)
        .then((result) => {
            console.log("i was hit")

            res.json(result.data.data);
        }).catch(err => {
            console.log(err);
        });
    },

    plantDetail: function (req, res) {
        const plantID = req.params.id;
        const Url = `https://trefle.io/api/v1/plants?q=${plantID}&token=${process.env.TREFFLE_KEY}`;
        console.log("I'm the url " + Url)

        axios.get(Url)
        .then((result) => {
            console.log("I'm the url " + Url)
            res.json(result.data.items);
        }).catch(err => {
            console.log(err);
        });
    }
}


