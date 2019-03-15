const db = require("../models");

// Defining methods for the booksController
module.exports = {
    messageHistory: function (req, res) {
        db.Message
            //WILL SOON BE SENDER AND RECEIVER BEING MATCHED
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};