import { Router, type Request, type Response } from "express";


const router: Router = Router()
const tarefas = [
  { id: 1, nome: "Estudar Node JS", concluida: false },
  { id: 2, nome: "Fazer compras", concluida: true },
  { id: 3, nome: "Ler um livro", concluida: false },
];

// router.get("/tarefas", (req: Request, res: Response) => {
//   res.send({message: 'Minha primeira API!'})
// })

// Query params => /tarefas?nome=NodeJS
// router.get("/tarefas", (req: Request, res: Response) => {
//   const name = req.query.nome;
//   res.send({ tarefa: name })
// })

// Route params => /tarefas/12345
// router.get("/tarefas/:id", (req: Request, res: Response) => {

//   const id = req.params.id;

//   res.send({ tarefa: `Tarefa com ID: ${id}` })
// })


export { router }