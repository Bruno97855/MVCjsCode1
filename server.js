"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("./src/Route/route"));
const server = (0, express_1.default)();
const port = 3000;
server.use(express_1.default.json());
server.use(route_1.default);
server.use(express_1.default.static("public"));
server.listen(port);
//# sourceMappingURL=server.js.map