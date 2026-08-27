export function parseRoutePath(path) {
    const routeParametersRegex = /:([a-zA-Z]+)/g

    // identifica parametros dinamicos da rota
    const params = path.replaceAll(routeParametersRegex, "(?<$1>[a-z0-9_-]+)")

    // substitui os parametros por grupos nomeados que serao capturados pela RegExp
    const pathRegex = new RegExp(`^${params}(?<query>\\?(.*))?$`)

    return pathRegex
}