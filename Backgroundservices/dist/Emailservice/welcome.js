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
const ejs_1 = __importDefault(require("ejs"));
const mssql_1 = __importDefault(require("mssql"));
const index_1 = __importDefault(require("../Helpers/index"));
const Config_1 = require("../Config");
const welcomeEmail = () => __awaiter(void 0, void 0, void 0, function* () {
    const pool = yield mssql_1.default.connect(Config_1.sqlConfig);
    const User = yield (yield pool.request().query("SELECT * FROM user WHERE is_sent='not_sent'")).recordset;
    for (let user of User) {
        ejs_1.default.renderFile('Templates/welcomeEmail.ejs', { username: user.username }, (error, html) => __awaiter(void 0, void 0, void 0, function* () {
            const message = {
                from: process.env.EMAIL_ADDRESS,
                to: user.email,
                subject: `Succesful Registration To Write's Oasis`,
                html
            };
            try {
                yield (0, index_1.default)(message),
                    yield pool.request().query(`UPDATE user SET is_sent ='sent' WHERE id= '${user.id}' `);
            }
            catch (error) {
                console.log(error);
            }
        }));
    }
});
const paymentDisbursed = () => __awaiter(void 0, void 0, void 0, function* () {
    const pool = yield mssql_1.default.connect(Config_1.sqlConfig);
});
const assignedTask = () => __awaiter(void 0, void 0, void 0, function* () {
    const pool = yield mssql_1.default.connect(Config_1.sqlConfig);
});
exports.default = welcomeEmail;
//  export default paymentDisbursed
