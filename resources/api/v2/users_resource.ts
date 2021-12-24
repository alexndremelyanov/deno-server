import {BaseResource} from "../base_resouce.ts";
import {Drash} from "../../../deps.ts"

export class UsersResource extends BaseResource {
    public paths = this.prefixPaths("api_v2", ["/users", "/users/:id"])

    public GET(request: Drash.Request, response: Drash.Response): void {
        return response.text("Hello from v2!")
    }
}