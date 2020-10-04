"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialize = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
class initialize {
    initialize(app) {
        app.use(cors_1.default());
        //  app.use(logger('dev'));
        app.use(express_1.default.json());
        app.use(body_parser_1.default.urlencoded({ extended: false }));
        app.use(body_parser_1.default.json());
        app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
    }
}
exports.initialize = initialize;
//# sourceMappingURL=initialize.js.map