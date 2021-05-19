const express = require('express');
const cors = require('cors');
const request = require('request');

const app = express();

app.use(cors());
app.use(express.json());

facts = [];
myFacts = [];

app.get("/", (req, res) => {
    res.send("Hello!!")
});

request("https://cat-fact.herokuapp.com/facts/", { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    facts = body.map((item) => {
        return {
            "content" : item.text
        }});
});

app.get("/AllFacts", (req, res) => {
    res.status(200).json(facts);
});

app.get("/MyFacts", (req,res) => {
    res.status(200).json(myFacts);
})

app.post("/AddFact", (req, res) =>{
    const newFact = req.body;
    facts.push(newFact);
    myFacts.push(newFact);
    res.status(201).json(myFacts);
});

app.delete("/DeleteFact/:id", (req,res) => {
    const id = req.params.id;

    myFacts = myFacts.filter((item) => item.id !== id);
    facts = facts.filter((item) => item.id !== id);
    res.status(200).json(myFacts);
})

module.exports = app;
