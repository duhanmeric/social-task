const AuthController = require('./controllers/AuthController');
const AuthPolicy = require('./policies/AuthControllerPolicy');
const ListController = require('./controllers/ListController');

module.exports = (app) => {
    app.post('/register', AuthPolicy.register, AuthController.register)
    app.post('/login', AuthController.login)
    app.get('/profile/:id', ListController.index)
    app.post('/profile/:id', ListController.post)
    app.patch('/profile/:id', ListController.changeList)
    app.delete('/profile/:id', ListController.delete)
}
