import { randomUUID } from "node:crypto"
 
export function create({ req, res, database }) {
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

    database.insert("tickets", ticket)

    return res.writeHead(201).end(JSON.stringify(ticket))
}