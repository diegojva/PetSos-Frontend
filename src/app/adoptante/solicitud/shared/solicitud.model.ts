import { Pet } from "src/app/admin/pets/shared/pet.model";

export class Solicitud
{
    idSolicitud: number;
    nombre: string;
    apellido: string;
    direccion: number;
    ciudad: string;
    dni: string;
    telefono: string;
    correo: string;
    detalleSolicitud: string;
    mascota: Pet;
}