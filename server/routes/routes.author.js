const AC = require('../controllers/controller.author');

module.exports = (app) => {
    app.post('/api/author/new',AC.addAuthor);
    app.get('/api/authors',AC.allAuthors);
    app.get('/api/author/:id',AC.author);
    app.put('/api/edit/:id',AC.updateAuthor);
    app.delete('/api/delete/:id',AC.deleteAuthor);
}