/**
 * URL.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        URL: {
            type: "string",
            required: true
        },
        url_alias: {
            type: "string"
        },
        property: {
            model: 'property',
            required: true,
        },
        category: {
            model: 'category',
            required: true,
        },
        country: {
            model: 'country',
            required: true,
        },
        environment: {
            model: 'environment',
            required: true,
        },
        active:{
        	type: "boolean"
        },

    }
};
