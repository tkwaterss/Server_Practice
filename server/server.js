const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

dogsArray = [
    {
        breed: "Yellow Lab",
        name: "Thule",
        color: "Yellow",
        size: "large",
        legs: 4,
        fetch: true,
        isCute: true,
        friendly: true
    },
    {
        breed: "Golden Retriever",
        name: "Buddy",
        color: "Golden",
        size: "large",
        legs: 4,
        fetch: true,
        cute: true,
        friendly: true
    },
    {
        breed: "Chihuahua",
        name: "Lil Bitch",
        color: "Black",
        size: "small",
        legs: 2,
        fetch: false,
        cute: false,
        friendly: false
    },
    {
        breed: "Pit Bull",
        name: "Boss",
        color: "Grey",
        size: "medium",
        legs: 4,
        fetch: false,
        cute: true,
        friendly: true
    },
    {
        breed: "Husky",
        name: "Cane",
        color: "grey-white",
        size: "large",
        legs: "4",
        fetch: true,
        cute: true,
        friendly: true
    }
]

app.get("/api/dogs", (req,res) => {
    res.status(200).send(dogsArray);
    //sending back an array of objects
})

app.get("/api/friend", (req,res) => {
    let friendlyDogsArr = dogsArray.filter(dogObj => {
        return dogObj['friendly'];
    })
    res.status(200).send(friendlyDogsArr);
})

app.get("/api/fetch", (req,res) => {
    let fetchDogsArr = dogsArray.filter(dogObj => {
        return dogObj.fetch;
    })
    res.status(200).send(fetchDogsArr);
})

app.get("/api/dogSize", (req, res) => {
    let {dogSize} = req.query;
    dogSize = dogSize.toLowerCase();
    let filteredDogs = dogsArray.filter(dogObj => {
        return dogObj.size === dogSize;
    })
    console.log(filteredDogs);
    res.status(200).send(filteredDogs);
})

app.listen(4000, () => console.log("App running on server 4000."));