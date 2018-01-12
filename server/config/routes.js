var people = require('../controllers/tasks.js');

module.exports = function(app){
  app.get('/', function(req, res) {
    res.redirect('/tasks');
  })

  app.get('/tasks', function(req, res) {
    people.show(req, res)
  })

  app.get('/tasks/:id', function(req, res) {
    people.one(req, res)
  })

  app.post('/tasks', function(req, res) {
    people.create(req, res)
  })

  app.put('/tasks/:id', function(req, res) {
    people.update(req, res)
  })

  app.delete('/tasks/:id', function(req, res) {
    people.destroy(req, res)
  })
}
