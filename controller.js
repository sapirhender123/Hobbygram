const Services = require('./services');
const mongoose = require(mongoose);

const get_post = (req, res) => {
    Services.find().then((result) => {

    })
}

const post_post = (req, res) => {
    const toUpload = JSON.parse(req.body.document);
    toUpload["ttl"] =  Date.now();
    const listing = new Services(JSON.parse(req.body.document));

    listing.save().then((result) => {

    })
}