"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const userController_1 = require("../controller/userController");
class Routes {
    constructor() {
        this.userController = new userController_1.userController();
    }
    routes(router) {
        router.get('/', this.userController.registerUsers);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=userRoute.js.map