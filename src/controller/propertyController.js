const propertyModel = require("../models/property.model");
const _ = require("lodash");
const http = require('../services/app.http.service');

module.exports.addProperty = async (req, res) => {

    // check if enter data
    if (!req.body) return res.status(200).send({ status: 200, message: "Property information can't be empty.", });
    // Joi validation
    const { error, value } = propertyModel.propertyJoiSchema.validate(req.body);
    if (error) return res.status(200).send({ status: 200, message: error.details });
    // pass requested model to DBSchema model
    const propertyDBModel = new propertyModel.propertyDBSchema(req.body);
    http.save(propertyDBModel, res).then(result => {
        if (result.status === 200)
            return res.status(200).send({ status: 200, message: "Property saved successfully.", });
    })
}

// Edit Function
module.exports.updateProperty = async (req, res) => {
    // check required filleds
    if (!req.body) return res.status(200).send({ status: 200, message: "Please fill the required information." });

    http.put(propertyModel.propertyDBSchema, req, res).then((result) => {
        if (result.status === 200) {
            return res.status(200).send({ status: 200, message: "Property Updated Sucessfully.", });
        }
    })
}

// View All Property functiom
module.exports.getAllProperties = (req, res) => {

    http.get(propertyModel.propertyDBSchema, res).then(result => {
        if (result)
            return res.status(200).send({ status: 200, message: "List of Properties.", data: result });
    });
}

// Delete Property fnction
module.exports.deleteProperty = async (req, res) => {
    http.remove(propertyModel.propertyDBSchema, req, res).then(result => {
        if (result)
            return res.status(200).send({ status: 200, message: "Property Deleted Sucessfully." });
    });

}

// get property by id fnction
module.exports.getPropertyByID = async (req, res) => {

    http.getByID(propertyModel.propertyDBSchema, req, res).then(result => {
        if (result.status === 200)
            return res.status(200).send({ status: 200, data: result.data });
    });
}