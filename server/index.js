"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 10000;
app.use(express_1.default.static(path_1.default.join(__dirname, '../client/MerchantAppFrontend/dist')));
app.get("/api", (req, res) => {
    res.send("hey");
});
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../client/MerchantAppFrontend/dist/index.html'));
});
app.listen(PORT, () => console.log(`server is running on localhost:${PORT}`));
