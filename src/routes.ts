import { Router, type NextFunction, type Request, type Response } from "express";
import { TaskController } from "./controllers/TaskController";
import { checkIndexInArray, checkTaskExists, logRequests } from "./middlewares/TaskMiddleware";

export const router: Router = Router()
const taskController = new TaskController()

// Aplicando o middleware global para todas as rotas
router.use(logRequests)

// Lista todas as tarefas
router.get("/tarefas", taskController.getAll )

// Lista uma tarefa específica
router.get("/tarefas/:index", checkIndexInArray, taskController.getOne)
 
// Adiciona uma nova tarefa
router.post("/tarefas", checkTaskExists, taskController.create )

// Atualiza uma tarefa existente
router.put("/tarefas/:index", checkTaskExists, checkIndexInArray, taskController.update )

// Remove uma tarefa
router.delete("/tarefas/:index", checkIndexInArray, taskController.delete)