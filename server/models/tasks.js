var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var TaskSchema = new mongoose.Schema({
 title: {
   type: String,
   trim: true,
   required: [true, "Task name is requird"],
   minlength: [5, "Task name should be longer than 5"],
   unique: true
 },
 description: {
   type: String,
   trim: true,
   default: ''
 },
 completed: {
   type: Boolean,
   required: true,
   default: false
 }
}, {timestamps: true });

var Task = mongoose.model('Task', TaskSchema);

TaskSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });
