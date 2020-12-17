const axios = require('axios');

const trefleAPI = (app, process) => {
    let searchPlants = app.get("/search/:plantName", (req, res) => {
        const plantName = req.params.plantName;
        const Url = `https://trefle.io/api/v1/plants/search?q=${plantName}/?token=${process.env.TREFFLE_KEY}`;
        

        axios.get(Url).then((result) => {
            res.json(result.data.items);
        }).catch(err => {
            console.log(err);
        });
    });

    let listPlants = app.get("/garden", (req, res) => {
        const Url = `https://trefle.io/api/v1/plants?token=${process.env.TREFFLE_KEY}`;
        

        axios.get(Url).then((result) => {
            res.json(result.data.items);
        }).catch(err => {
            console.log(err);
        });
    });

    let plantDetail = app.get("/plant/:id", (req, res) => {
        const plantID = req.params.id;
        const Url = `https://trefle.io/api/v1/plants/${plantId}?token=${TREFFLE_KEY}`;
        

        axios.get(Url).then((result) => {
            res.json(result.data.items);
        }).catch(err => {
            console.log(err);
        });
    });
}

module.exports = trefleAPI;
