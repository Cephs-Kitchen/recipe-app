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

//Alleviating CORS issues
const cors = require('cors');
app.use(cors())
app.options('*', cors())

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

app.get('/Recipes/:id', (req, res) => {
    db.query('SELECT * FROM tbl_recipes WHERE food_group_id = $1', [req.params.id],
    (db_error, db_result) => {
        if(db_error) {
            throw db_error
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

app.get('/FoodGroup/:name', (req, res) => {
    db.query('SELECT * FROM tbl_food_group WHERE food_group_name = $1', [req.params.name],
    (db_error, db_result) => {
        if(db_error) {
            throw db_error
        }
        res.status(200).json(db_result.rows);
    });
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))