"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEstates = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../config");
const mapper_1 = require("../mapper");
const getEstates = async (query) => {
    const { user, password, baseUrl } = config_1.config;
    const { cantidadporpagina = 4, pagina = 1, codigo, destinacion } = query;
    const { data, status: code } = await axios_1.default.get(`
        ${baseUrl}/${user}/${password}?cantidadporpagina=${cantidadporpagina}&pagina=${pagina}${codigo ? `&codigo=${codigo}` : ''}${destinacion ? `&destinacion=${destinacion}` : ''}
    `);
    const mappedData = data?.map((estate) => {
        return new mapper_1.MapperResponse(estate);
    });
    return { data: mappedData, code };
};
exports.getEstates = getEstates;
