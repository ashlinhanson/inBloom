const axios = require('axios');

module.exports = {
    searchPlants: function (req, res) {
        const plantName = req.params.plantName;
        const Url = `https://trefle.io/api/v1/plants/search?q=${plantName}&token=${process.env.TREFFLE_KEY}`;
        axios
            .get(Url)
            .then((result) => {
                res.json(result.data.data);
            }).catch(err => {
                console.log(err);
            });
    },

    plantDetail: function (req, res) {
        const plantID = req.params.id;
        let config = {
            method: 'get',
            url: 'https://trefle.io/api/v1/plants/' + plantID + '?token=' + process.env.TREFFLE_KEY,
            headers: {}
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                res.json(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
}