import { Router, type Request, type Response } from "express";


const router: Router = Router()
const tarefas = ["Estudar Node JS","Fazer compras","Ler um livro"];

// Request Body => /tarefas
// Lista todas as tarefas
router.get("/tarefas", (req: Request, res: Response) => {
  res.json(tarefas)
})

// Lista uma tarefa específica
router.get("/tarefas/:index", (req: Request, res: Response) => {
  const index = req.params.index

  res.json(tarefas[Number(index)])
})
 
// Adiciona uma nova tarefa
router.post("/tarefas", (req: Request, res: Response) => {
  const { name } = req.body

  
  if (!name) {
    res.status(400).json({ message: 'O nome da tarefa não pode ser vazio.' })

    return;
  }

  
  tarefas.push(name)

  res.status(201).json({ message: "Tarefa adicionada com sucesso!", tarefa: name })
})


export { router }