import { Router, type NextFunction, type Request, type Response } from "express";
import {  tarefas } from "../database/tasks"


// Middleware
// Está no meio após chamar a rota e antes  de chamar o callback

export function logRequests(req: Request, res: Response, next: NextFunction) {
  console.log("Passou no Middleware de Rotas")
  return next();
}

// Middleware 
export function checkTaskExists(req: Request, res: Response, next: NextFunction) {
  if (!req.body.name) {
    return res.status(400).json({ error: 'Nome inválido / faltando nome' })
  }

  return next()
}

export function checkIndexInArray(req: Request, res: Response, next: NextFunction) {
  const tarefa = tarefas[Number(req.params.index)]

  if (!tarefa) {
    return res.status(400).json({ error: 'Tarefa não encontrada!' })
  }

  return next()
}