import { randomUUID } from "node:crypto"
 
export function create({ req, res }) {
    const { equipamento, descricao, username } = req.body

    const ticket = {
        id: randomUUID(),
        equipamento,
        
        descricao, 
        username,
        status: "open",
        create_at: new Date(),
        update_at: new Date()
    }

    return res.end(JSON.stringify(ticket))
}