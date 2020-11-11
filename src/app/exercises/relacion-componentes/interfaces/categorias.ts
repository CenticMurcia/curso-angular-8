export interface DataJSON {
    data: Array<Categoria>;
}

export interface Categoria {
    name: string;
    palabras: Array<Palabra>;
}

export interface Palabra {
    name: string;
    date: number;
}
