var express = require('express');
var router = express.Router();

var tasksList = [
    {id : 1, name: 'Watch a movie', isCompleted : false},
    {id : 2, name: 'Fix the bug', isCompleted : false},
    {id : 3, name: 'Create a bug without others knowledge', isCompleted : false},
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tasks/index', {layout : 'tasks/layout', tasks : tasksList});
});

router.get('/new', function(req, res, next) {
  res.render('tasks/new', {layout : 'tasks/layout'});
});

router.post('/new', function(req, res, next) {
    var newTask = req.body.taskName;
    tasksList.push(newTask);
    res.redirect('/tasks');
});

router.get('/toggle/:id', function(req, res, next){
    var taskId = parseInt(req.params.id);
    var task = tasksList.filter(function(t) { return t.id === taskId ;})[0];
    if (task) {
        task.isCompleted = !task.isCompleted;
    }
    res.redirect('/tasks');
});

module.exports = router;
