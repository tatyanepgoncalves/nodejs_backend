import { Router, type NextFunction, type Request, type Response } from "express";

export const router: Router = Router()

const tarefas = ["Estudar Node JS","Fazer compras","Ler um livro"];

// Middleware
// Está no meio após chamar a rota e antes  de chamar o callback

router.use((req: Request, res: Response, next: NextFunction) => {
  console.log("Passou no Middleware de Rotas")
  return next()
})

// Middleware 
function checkTask(req: Request, res: Response, next: NextFunction) {
  if (!req.body.name) {
    return res.status(400).json({ error: 'Nome inválido / faltando nome' })
  }

  return next()
}

function checkIndexTask(req: Request, res: Response, next: NextFunction) {
  const tarefa = tarefas[Number(req.params.index)]

  if (!tarefa) {
    return res.status(400).json({ error: 'Tarefa não encontrada!' })
  }

  return next()
}

// Request Body => /tarefas
// Lista todas as tarefas
router.get("/tarefas", (req: Request, res: Response) => {
  res.json(tarefas)
})

// Lista uma tarefa específica
router.get("/tarefas/:index", checkIndexTask, (req: Request, res: Response) => {
  const index = req.params.index

  res.json(tarefas[Number(index)])
})
 
// Adiciona uma nova tarefa
router.post("/tarefas", checkTask, checkIndexTask, (req: Request, res: Response) => {
  const { name } = req.body

  tarefas.push(name)

  res.status(201).json({ message: "Tarefa adicionada com sucesso!", tarefa: name })
})

// Atualiza uma tarefa existente
router.put("/tarefas/:index", checkTask, checkIndexTask, (req: Request, res: Response) => {
  const index = req.params.index
  const { name } = req.body

  tarefas[Number(index)] = name
  res.json({ message: "Tarefa atualizada com sucesso!", tarefa: name })
})

// Remove uma tarefa
router.delete("/tarefas/:index", checkIndexTask, (req: Request, res: Response) => {
  const index = req.params.index

  tarefas.splice(Number(index), 1)

  res.json({ message: "Tarefa removida com sucesso!" })
})