export interface IEstate {
    clase: string,
    area: string,
    precio: number,
    municipio: string,
    barrio: string,
    sostenimiento: string,
    tipo_servicio: string,
    sala: boolean,
    cocina: number,
    baños: number,
    baño_Cabina: boolean,
    resumen: string,
    video: string,
    latitud: string | number,
    longitud: string | number,
    precio_venta: number,
    sector: string,
    patios: string;
    imagenes: Image[],
    consecutivo: string | number;
}

export interface Image {
    fotourl: string;
}
