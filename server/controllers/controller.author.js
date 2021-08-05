const Author = require('../models/model.author');

module.exports.addAuthor = (req, res) => {
  Author.create(req.body)
    .then((newAuthor) => res.json({name:newAuthor.name }))
    .catch((err) => res.json({ errorMessage: err }));
};

module.exports.allAuthors = (req, res) => {
  Author.find()
    .then((Authors) => res.json({ Authors: Authors }))
    .catch(err => res.status(400).json({ errorMessage: err }));
}

module.exports.author = (req, res) => {
  Author.find({_id:req.params.id})
    .then((Author) => res.json(Author))
    .catch(err => res.status(400).json({ errorMessage: err }));
}

module.exports.updateAuthor = (req, res) => {
  Author.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { runValidators: true }
  )
      .then(Author => res.json(Author))
      .catch(err => res.status.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params.id })
      .then(result => res.json(result))
      .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
}