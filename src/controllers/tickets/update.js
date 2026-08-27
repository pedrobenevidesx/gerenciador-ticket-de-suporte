export function update( { req, res, database }) {

    const { id } = req.params
    const { equipamento, descricao } = req.body

    database.update("tickets", id, {
        equipamento,
        descricao,
        update: new Date(),
    })

    return res.end("Ticket atualizado com sucesso!")
}