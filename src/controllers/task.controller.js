import Task from "../models/Task";

class TaskController {
  
  renderTask = async (req, res) => {
    
    const tasks = await Task.find().lean()
    
    res.render('home', {tasks: tasks})
  };

  addTask = async (req, res) => {

    try {
      const task = Task(req.body)
  
      const taskSaved = await task.save()
  
      console.log(taskSaved)
      res.redirect('/')
    } catch (error) {
      console.log(error)
    };
  };

  renderTaskEdit = async (req, res) => {

    try {
      const task = await Task.findById(req.params.id).lean()
    
      res.render("editTask", {task})
    } catch (error) {
      console.error(error)
    };
  };

  editTask = async (req, res) => {
  
    const {id} = req.params
    await Task.findByIdAndUpdate(id, req.body)
  
    res.redirect("/")
  };

  deleteTask = async (req,res) => {
  
    const {id} = req.params
    await Task.findByIdAndDelete(id);
    res.redirect("/");
  };

  finishTask = async (req,res) => {
  
    const {id} = req.params
    const task = await Task.findById(id);
  
    task.finish = !task.finish;
    await task.save();
    res.redirect("/");
  };

};

export default TaskController

