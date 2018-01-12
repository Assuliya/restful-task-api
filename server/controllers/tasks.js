var mongoose = require('mongoose');
var Task = mongoose.model('Task')

module.exports = {
  show: function(req, res){
    Task.find(req.body, function(err, tasks) {
      console.log(tasks)
      res.json(tasks)
    })
  },
  create: function(req,res){
    console.log("POST DATA", req.body);
    var task = new Task(req.body);
    task.save(function(err) {
      if(err) {
        console.log('something went wrong');
      } else {
        console.log('successfully added a task!');
        res.redirect('/');
        }
    })
  },
  update: function(req, res){
  Task.update({_id: req.params.id}, req.body, { new: true },
    function(err) {
      if(err) {
        console.log('something went wrong');
      } else {
        console.log('successfully edited the task!');
        res.redirect('/');
      }
    })
  },
  destroy: function(req,res){
    Task.remove({_id: req.params.id}, function(err){
      if(err) {
        console.log('something went wrong');
      } else {
        console.log('successfully destroyed a task!');
        res.redirect('/');
        }
    })
  },
  one: function(req, res){
    Task.find({_id: req.params.id}, function(err, task) {
      console.log(task)
      res.json(task)
    })
  }
}
