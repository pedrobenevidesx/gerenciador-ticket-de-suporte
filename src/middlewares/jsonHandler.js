export async function jsonHandler(req, res) {
    const buffers = []

    // looping para receber cada pedaco da requisicao em um único buffer
    for await (const chunk of req) {
        buffers.push(chunk)
    }

    try {
        req.body = JSON.parse(Buffer.concat(buffers).toString())

    } catch (erro) {
        req.body = null
    }

    res.setHeader("Content-Type", "application/json")
}