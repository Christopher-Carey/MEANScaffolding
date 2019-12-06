require('../models/model')

const mongoose = require('mongoose'),
    restful = mongoose.model("restful");

module.exports = {

    index: function (request, response) {
        restful.find()
        .then(allrestfuls => {
            response.json({data:allrestfuls});
        })
        .catch(err => response.json(err));
    },
    show: function (request, response) {
        restful.findOne(request.params)
            .then(onerestful => {
                onerestfulVar = onerestful
                response.json(onerestfulVar)
            })
            .catch(err => response.json(err));
    },
    create: function (request, response) {
        restful.create(request.body)
            .then(newrestful => {
                response.redirect("/");
            })
            .catch(err => response.json(err));
    },
    destroy: function (request, response) {
        const { id } = request.params;
        restful.remove({_id: id})
            .then(deletedrestful => {
                response.redirect("/")
            })
            .catch(err => response.json(err));
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
            .catch(err => response.json(err));
    }
};