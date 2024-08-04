"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapperResponse = void 0;
class MapperResponse {
    consecutivo;
    clase;
    area;
    precio;
    municipio;
    barrio;
    sostenimiento;
    tipo_servicio;
    sala;
    cocina;
    baños;
    baño_Cabina;
    resumen;
    video;
    latitud;
    longitud;
    precio_venta;
    sector;
    patios;
    imagenes;
    constructor(payload) {
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
        this.imagenes = payload?.imagenes.map(image => ({ fotourl: image.fotourl }));
    }
}
exports.MapperResponse = MapperResponse;
