require('../models/model')

const mongoose = require('mongoose'),
    restful = mongoose.model("restful");

    module.exports = {

        index: function (request, response) {
            restful.find()
                .then(restfuls => response.json({ results: restfuls }))
                .catch(err => response.json({ error: err.error }))
        },
        show: function (request, response) {
            var { id } = request.params
            restful.findOne({ _id: id })
                .then(restful => response.json({ results: restful }))
                .catch(err => response.json({ error: err.error }))
        },
        create: function (request, response) {
            restful.create(request.body)
                .then(restful => response.json({ results: restful }))
                .catch(err => response.json({ error: err.error }))
        },
        destroy: function (request, response) {
            const { id } = request.params;
            restful.remove({ _id: id })
                .then(restful => response.json({ results: restful }))
                .catch(err => response.json({ error: err.error }))
        },
        update: function (request, response) {
            // const { id } = request.params;
            restful.updateOne(request.params, {
                name: request.body.name,
                fact: request.body.fact
            })
                .then(result => {
                    response.redirect("/edit/" + id)
                })
                .catch(err => response.json({ error: err.error }))
        }
    };