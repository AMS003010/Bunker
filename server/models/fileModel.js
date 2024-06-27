const mongoose = require('mongoose');
const joi = require('joi');

const Schema = mongoose.Schema

const fileSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    file_type: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
});

const validate = (file) => {
    const schema = joi.object({
        name: joi.string().required(),
        file_type: joi.string().required(),
        url: joi.string().required(),
    });

    return schema.validate(file);
};

const Files = mongoose.model('Files',fileSchema);

module.exports = {Files,validate};