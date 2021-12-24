import {Drash} from "../../deps.ts"

export class BaseResource extends Drash.Resource {
    #prefixes: {[k: string]: string} = {
        api_v1: "/api/v1",
        api_v2: "/api/v2"
    }
    protected prefixPaths(prefix: string, paths: string[]) {
        return paths.map((path) => this.#prefixes[prefix] + path)
    }
}