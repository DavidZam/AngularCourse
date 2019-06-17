export interface Usuario {
    nombreCompleto: {
        nombre: string,
        apellido: string
    };
    correo: string;
    pasatiempos: string[];
    username: string;
    password: string;
    password2: string;
}
