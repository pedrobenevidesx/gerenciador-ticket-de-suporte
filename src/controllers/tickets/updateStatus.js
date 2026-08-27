export function updateStatus({ req, res, database }) {
    const { id } = req.params
    const { solucao } = req.body

    database.update("tickets", id, { status: "close", solucao })

    return res.end("Status atualizado com sucesso!")
}