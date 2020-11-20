//Express
const express = require('express');
const request = require('request');
const app = express();
const port = 5000;

//Body Parser
const bodyParser = require('body-parser');
const db = require('./db').getDB();
const { get } = require('request');
app.use(bodyParser.json());

app.get('/', (req, res) => res.send("Welcome to Ceph's Citchen!"))

//GET recipes
app.get('/Recipes', (req, res) => {
    db.query('SELECT * FROM tbl_recipes', (db_error, db_result) => {
        if(db_error) {
            throw db_error;
        }
        res.status(200).json(db_result.rows);
    });
});

//GET recipes by pantry item
app.get('/PantryList', (req, res) => {
    db.query('SELECT * FROM tbl_pantrylist', (db_error, db_result) => {
        if(db_error) {
            throw db_error;
        }
        res.status(200).json(db_result.rows);
    });
});

//GET recipes by food group
app.get('/FoodGroup', (req, res) => {
    db.query('SELECT * FROM tbl_food_group', (db_error, db_result) => {
        if(db_error) {
            throw db_error;
        }
        res.status(200).json(db_result.rows);
    });
});





app.listen(port, () => console.log(`Example app listening on port ${port}!`))