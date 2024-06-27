const { Files,validate } = require("../models/fileModel");
const User = require('../models/userModel');

const createFile = async (req, res) => {
    console.log("Incoming request data:", req.body.data);
    const {error} = validate(req.body.data);
    console.log("lin 1");
    if(error) {
        return res.status(400).send({message: error.details[0].message});
    }
    console.log("lin 2");
    const file = await Files(req.body.data).save();
    console.log("lin 3");
    const user = await User.findOne({name: req.body.user});
    console.log("lin 4");
    console.log(user);
    user.files.push(file.url);
    await user.save();
    console.log("lin 5");
    res.status(201).send({data: file, message: "File created successfully"});
};

const getFiles = async (req,res) => {
    console.log("Incoming request data:", req.body.user);
    const files = await User.find({name: req.body.user});
    res.status(200).send({data: files});
}

module.exports = {
    createFile,
    getFiles
};