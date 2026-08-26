export function updateStatus({ req, res, database }) {
    const { id } = req.params

    database.update("tickets", id, { status: "close" })

    return res.end()
}