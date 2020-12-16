const axios = require('axios');

const treffleAPI = (app, process) => {
    app.get("/search/:plantName", (req, res) => {
        const plantName = req.params.plantName;
        const Url = `https://trefle.io/api/v1/plants/search?q=${plantName}/?token=${process.env.TREFFLE_KEY}`;
        

        axios.get(Url).then((result) => {
            res.json(result.data.items);
        }).catch(err => {
            console.log(err);
        });
    });
}

module.exports = treffleAPI;
