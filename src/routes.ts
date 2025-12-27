import { Router, type Request, type Response } from "express";


const router: Router = Router()

router.get("/tarefas", (req: Request, res: Response) => {
  res.send({message: 'Minha primeira API!'})
})

export { router }