import { type Request, type Response } from "express";
import {  tarefas } from "../database/tasks"

export class TaskController {
  getAll(req: Request, res: Response) {
    return res.json(tarefas)
  }

  getOne(req: Request, res: Response) {
    const { index } = req.params

    return res.json(tarefas[Number(index)])
  }

  create(req: Request, res: Response) {
    const { name } = req.body 
    tarefas.push(name)

    return res.status(201).json({ 
      message: "Tarefa adicionada com sucesso!", 
      tarefa: name 
    })
  }

  update(req: Request, res: Response) {
    const { index } = req.params 
    const { name } = req.body

    tarefas[Number(index)] = name

    return res.json({
      message: "Tarefa atualizada com sucesso!",
      tarefa: name
    })
  }
  
  delete(req: Request, res: Response) {
    const { index } = req.params 

    tarefas.splice(Number(index), 1)

    return res.json({ message: "Tarefa removida com sucesso!" })
  }
}