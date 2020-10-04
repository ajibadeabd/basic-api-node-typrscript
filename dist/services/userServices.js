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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const userModel_1 = require("../models/userModel");
const mongoose_1 = __importDefault(require("mongoose"));
const userModel = mongoose_1.default.model('users', userModel_1.studentSchema);
class userServices {
    registerUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { name, email, password } = req.body;
            let save = new userModel({ name, email, password });
            save.save();
            return (save);
        });
    }
}
exports.userServices = userServices;
//# sourceMappingURL=userServices.js.map