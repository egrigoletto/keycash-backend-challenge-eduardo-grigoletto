"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var swagger_json_1 = __importDefault(require("../swagger.json"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var router = (0, express_1.Router)();
router.use('/api-docs', swagger_ui_express_1.default.serve);
router.get('/api-docs', swagger_ui_express_1.default.setup(swagger_json_1.default));
exports.default = router;
