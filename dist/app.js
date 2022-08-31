"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dehashList = void 0;
const express_1 = __importDefault(require("express"));
const dehash_1 = require("./dehash");
const app = (0, express_1.default)();
const port = 3000;
exports.dehashList = [];
//MiddleWare
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
//Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.post("/de-hash", (req, res) => {
    exports.dehashList = [];
    res.send((0, dehash_1.inOrderCombination)(req.body.hash));
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map