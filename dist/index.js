"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
var property_routes_1 = __importDefault(require("./routes/property.routes"));
var documentation_routes_1 = __importDefault(require("./routes/documentation.routes"));
var typeorm_1 = require("typeorm");
var app = (0, express_1.default)();
//setup
dotenv_1.default.config();
(0, typeorm_1.createConnection)();
//middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(property_routes_1.default);
app.use(documentation_routes_1.default);
app.listen(process.env.PORT || 8080, function () {
    console.info("Server connected, port: " + (process.env.PORT || 8080));
});
