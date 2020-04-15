const express = require("express");
const knex = require("knex");

const knexConfig = require("../knexfile.js");

const db = knex(knexConfig.development);

const router = express.Router()

router.post("/", (req, res) => {
    const carData = req.body;
    db("cars")
        .insert(carData, "id")
        .then(ids => {
            db("cars").where({ id: ids[0]})
            .then(newCarEntry => {
                res.status(201).json(newCarEntry)
            })
        })
        .catch(err => {
            console.log(err)
        })
})

router.get("/", (req, res) => {
    db("cars")
       .then(cars => {
           res.status(200).json({data: cars})
       })
})

module.exports = router;