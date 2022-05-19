const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const post_schema = new Schema(
    {
        post: {
            type: String,
        },
        longitude: {
            type: Number,
        },
        latitude: {
            type: Number,
        },
        ttl: {
            type: Date,
        },
        is_valid: {
            type: Boolean,
        },
    }
);

const Services = mongoose.model('post',post_schema);
module.exports = Services;
