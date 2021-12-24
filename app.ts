import { Drash } from "./deps.ts";
import { UsersResource as v1UsersResource } from "./resources/api/v1/users_resource.ts";
import { UsersResource as v2UsersResource } from "./resources/api/v2/users_resource.ts";

const server = new Drash.Server({
    hostname: "0.0.0.0",
    port: 8000,
    protocol: "http",
    resources: [
        v1UsersResource,
        v2UsersResource,
    ],
});

server.run();

console.log(`Server running at ${server.address}.`);