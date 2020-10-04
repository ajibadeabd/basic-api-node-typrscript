"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const userServices_1 = require("../services/userServices");
class userController {
    constructor() {
        this.userServ = new userServices_1.userServices();
        this.registerUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let data = yield this.userServ.registerUsers(req, res);
            console.log(data);
            res.json(data);
        });
    }
}
exports.userController = userController;
//# sourceMappingURL=userController.js.map