/**
 * Las interfaces se utilizan para dar tipado a los objetos con los que trabajamos en TypeScript que no tienen estructura definida,
 * como por ejemplo, las peticiones API de un servidor
 */

export interface InformationRegionsList {
    informationPage: Informationpage;
    arrayRegions: Region[];
}

export interface Region {
    id: string;
    code?: string;
    iso2code: string;
    name: string;
    value?: string;
}

export interface Informationpage {
    page: string;
    pages: string;
    per_page: string;
    total: string;
}
