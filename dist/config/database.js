"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class database {
    database() {
        const uri = process.env.MONGODB_URI || 'mongodb://localhost/node-typescript';
        const dbOptions = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        };
        mongoose_1.default
            .connect(uri, dbOptions)
            .then(() => console.log(":: Connected to database"))
            .catch((error) => console.log(":: Couldn't connect to database ", error));
    }
}
exports.database = database;
//# sourceMappingURL=database.js.map