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
const express_1 = __importDefault(require("express"));
const cron_1 = __importDefault(require("cron"));
const welcome_1 = __importDefault(require("./Emailservice/welcome"));
const app = (0, express_1.default)();
cron_1.default.schedule('*/10*****', () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Refersh after 10 seconds');
    yield (0, welcome_1.default)();
}));
app.listen(3200, () => {
    console.log('Background services are running ');
});
