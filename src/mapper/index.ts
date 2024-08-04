import { IEstate, Image } from "../interfaces/estates";

export class MapperResponse {
    consecutivo: string | number;
    clase: string;
    area: string;
    precio: number;
    municipio: string;
    barrio: string;
    sostenimiento: string;
    tipo_servicio: string;
    sala: boolean;
    cocina: number;
    baños: number;
    baño_Cabina: boolean;
    resumen: string;
    video: string;
    latitud: string | number;
    longitud: string | number;
    precio_venta: number;
    sector: string;
    patios: string;
    imagenes: Image[]

    constructor(payload: IEstate) {
        this.consecutivo = payload?.consecutivo;
        this.clase = payload?.clase;
        this.area = payload?.area;
        this.precio = payload?.precio;
        this.municipio = payload?.municipio;
        this.barrio = payload?.barrio;
        this.sostenimiento = payload?.sostenimiento;
        this.tipo_servicio = payload?.tipo_servicio;
        this.sala = payload?.sala;
        this.cocina = payload?.cocina;
        this.baños = payload?.baños;
        this.baño_Cabina = payload?.baño_Cabina;
        this.resumen = payload?.resumen;
        this.video = payload?.video;
        this.latitud = payload?.latitud;
        this.longitud = payload?.longitud;
        this.precio_venta = payload?.precio_venta;
        this.sector = payload?.sector;
        this.patios = payload?.patios;
        this.imagenes = payload?.imagenes.map(image => ({fotourl: image.fotourl}));
    }
}
