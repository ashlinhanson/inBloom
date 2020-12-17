var Sequelize = require("sequelize");
const express = require("express");
const router = express.Router();
var db = require("../models");
const axios = require('axios');
let { each } = require("bluebird");
const dotenv = require("dotenv");
const config = require("../config/config.json")
dotenv.config();

module.exports = function () {

    function getTreffleInfo(){
        let results = '';
        TREFFLE_KEY = process.env.TREFFLE_KEY;
        const options = {
            method: 'get',
            url: `https://trefle.io/api/v1/plants/?q=${TREFFLE_KEY}`,
        };
        try {
            results = axios(options);
        } catch (error) {
            console.log(error);
        };
    
        if (results){ 
            return results.data;
        } else {
            console.log('No results for your plant');
        };
    
    }

    function plantParse (data){
        plantData = [];
        entry = {};
        for(each of data.data){
            entry = {'common_name': each.common_name, 
                'scientific_name': each.scientific_name, 
                'image_url': each.image_url, 
                'edible': each.main_species.edible, 
                'native': each.main_species.distribution.native, 
                'color': each.main_species.flower.color, 
                'growth_form': each.main_species.specifications.growth_form, 
                'growth_habit': each.main_species.specifications.growth_habit,
                'growth_rate': each.main_species.specifications.growth_rate,
                'avg_cm': each.main_species.specifications.average_height.cm,
                'max_cm': each.main_species.specifications.maximum_height.cm,
                'toxicity': each.main_species.specifications.toxicity,
                'ph_maximum': each.main_species.growth.ph_maximum,
                'ph_minimum': each.main_species.growth.ph_minimum,
                'bloom_months': each.main_species.growth.bloom_months,
                'light': each.main_species.growth.light,
                'growth_months': each.main_species.growth.growth_months,
                'atmospheric_humidity': each.main_species.growth.atmospheric_humidity,
                'minimum_precipitation':each.main_species.growth.minimum_precipitation,
                'maximum_precipitation': each.main_species.growth.maximum_precipitation,
                'minimum_root_depth': each.main_species.growth.minimum_root_depth,
                'minimum_temperature': each.main_species.growth.minimum_temperature, 
                'maximum_temperature': each.main_species.growth.maximum_temperature,
                'soil_nutriments': each.main_species.growth.soil_nutriments,
                'soil_salinity': each.main_species.growth.soil_salinity,
                'soil_texture': each.main_species.growth.soil_texture,
                'soil_humidity': each.main_species.growth.soil_humidity}
            plantData.push(entry)
        };
        // console.log(campgroundData)
        db.Plants.bulkCreate(plantData)
    };

    const init = () => {
        plants = getTreffleInfo()
        plantParse(plants)
    }

    init()


};