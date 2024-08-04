import axios from "axios";
import { config } from "../config";
import { MapperResponse } from "../mapper";
import { IEstate } from "../interfaces/estates";
import { IQuery } from "../interfaces/query";

export const getEstates = async ( query: IQuery ) => {
    const { user, password, baseUrl } = config;
    
    const { cantidadporpagina = 4, pagina = 1, codigo, destinacion } = query;

    const { data, status: code } = await axios.get(`
        ${baseUrl}/${user}/${password}?cantidadporpagina=${cantidadporpagina}&pagina=${pagina}${codigo ? `&codigo=${codigo}` : ''}${destinacion ? `&destinacion=${destinacion}` : ''}
    `);
    const mappedData = data?.map((estate: IEstate) => {
        return new MapperResponse(estate);
    })
    return { data: mappedData, code }
}
