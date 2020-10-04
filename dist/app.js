"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoute_1 = require("./routes/userRoute");
const initialize_1 = require("./middleware/initialize");
const database_1 = require("./config/database");
const port = process.env.PORT || 3000;
class App {
    constructor() {
        this.app = express_1.default();
        this.initialize = new initialize_1.initialize();
        this.route = new userRoute_1.Routes();
        this.database = new database_1.database();
        this.app = express_1.default();
        this.initialize.initialize(this.app);
        this.route.routes(this.app);
        this.database.database();
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map