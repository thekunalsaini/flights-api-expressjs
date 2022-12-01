const flights = require('../models/flights');
const { v4: uuidv4 } = require('uuid');

function GetAllflights(req, res) {
    console.log("hi")
    flights.find({}, (err, docs) => {
        if (!err) {
            res.status(200).send(docs);
        } else {
            res.send(err);
        }
    });
}

function GetflightsById(req, res) {
    flights.findById(req.params.id, (err, docs) => {
        if (!err) {
            res.status(200).send(docs);
        } else {
            res.send(err);
        }
    })
}
function GetflightsBydate(req, res) {
    flights.find({flightSource:req.params.flight_date}, (err, docs) => {
        if (!err) {
            res.status(200).send(docs);
        } else {
            res.send(err);
        }
    });
    
}

function GetflightsBysourcedest(req, res) {
    console.log(req.query);
    flights.find({$and: [{flightSource : req.query.source}, {flightDestination : req.query.dest}]}, (err, docs) => {
        if (!err) {
            res.status(200).send(docs);
        } else {
            res.send(err);
        }
    });
}

function Addflight(req, res) {
    let newproduct = new flights({
        _id: uuidv4(),
        flightName: req.body.flightName,
        flightSource: req.body.flightSource,
        flightDestination: req.body.flightDestination,
        flightDateTime: new Date()
    });
    newproduct.save((err) => {
        if (!err) {
            res.status(201).send({ message: 'Product Added Successfully' });
        } else {
            throw err;
        }
    });
}

function Updateflight(req, res) {
    flights.findById(req.params.id, (err, docs) => {
        if (!err) {
            if (docs == null) {
                res.status(404).send({ message: `Product with specified id: ${req.params.id} does not exists` });
            } else {
                product.updateOne({ _id: req.params.id }, {
                    flightName: req.body.flightName,
                    flightSource: req.body.flightSource,
                    flightDestination: req.body.flightDestination,
                    flightDateTime: new Date()
                }, (err, docs) => {
                    if (!err) {
                        res.status(200).send({ message: 'Product Updated Successfully' });
                    } else {
                        throw err;
                    }
                });
            }
        } else {
            res.send(err);
        }
    });
}

function DeleteflightById(req, res) {
    flights.deleteOne({ _id: req.params.id }, (err, docs) => {
        if (!err) {
            res.status(200).send({ message: 'Product Deleted Successfully' });
        } else {
            throw err;
        }
    });
}

module.exports = { GetAllflights, GetflightsById, GetflightsBydate, GetflightsBysourcedest, Addflight, Updateflight, DeleteflightById  }
//GetflightsByoperations