const router = require('express').Router();
const TaskController = require('../controllers/TaskController.js');


//Mostrar todas las tareas
router.get('/', TaskController.getAll);

//Mostrar una tarea por id
router.get('/id/:id', TaskController.getId);

//Crear una tarea
router.post('/', TaskController.insert );

//Modificar una tarea
router.put('/update/:id', TaskController.updateId);




module.exports = router;
