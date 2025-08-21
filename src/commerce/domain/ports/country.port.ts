import { Country } from '../../../products/domain/entities/countrys.entity';

// Este archivo define un "puerto" en la arquitectura hexagonal.
// Un puerto es una interfaz que describe lo que el dominio necesita de otra parte del sistema.
// En este caso, define lo que el módulo de clientes necesita del módulo de Producto.

export interface ICountryPort {
  // Método para buscar un país por su ID.
  // La implementación puede venir de una base de datos, una API externa, etc.
  findCountryById(id: string): Promise<Country | null>;

  // Método para listar todos los países disponibles.
  listCountries(): Promise<Country[]>;
}
