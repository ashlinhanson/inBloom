const axios = require('axios');

module.exports = {
    searchPlants: function (req,res){
        const { query: params} = req;
        const Url = `https://trefle.io/api/v1/plants/search?q=${plantName}/?token=${process.env.TREFFLE_KEY}`;

        axios
        .get(Url)
        .then((result) => {
            res.json(result.data.items);
        }).catch(err => {
            console.log(err);
        });
    },

    plantDetail : function (req, res) {
        const plantID = req.params.id;
        const Url = `https://trefle.io/api/v1/plants/${plantId}?token=${TREFFLE_KEY}`;
        

        axios.get(Url).then((result) => {
            res.json(result.data.items);
        }).catch(err => {
            console.log(err);
        });
    }
}

module.exports = trefleController;
