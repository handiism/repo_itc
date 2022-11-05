const Joi = require("joi");

const filePhotoSchema = Joi.object({
    fieldname: Joi.string().required(),
    mimetype: Joi.string().valid("image/jpeg", "image/png", "image/jpg"),
    filename: Joi.string().required(),
}).unknown();

const createCourseSchmea = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
}).unknown();

module.exports = { filePhotoSchema, createCourseSchmea };