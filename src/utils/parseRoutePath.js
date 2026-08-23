export function parseRoutePath(path) {
    const routeParametesRegex = /:([a-zA-Z]+)/g

    const params = path.replaceAll(routeParametersRegex, "(?<$1>[a-z0-9_]+)")

    const pathRegex = new RegExp(`^${params}(?<querry\\?(.*))?$`)

    return pathRegex
}