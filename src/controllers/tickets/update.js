export function update( { req, res, database }) {

    console.log(req.params)
    console.log(req.body)


    const { id } = req.params
    const { equipamento, descricao } = req.body

    database.update("tickets", id, {
        equipamento,
        descricao,
        update: new Date(),
    })

    return res.end()
}