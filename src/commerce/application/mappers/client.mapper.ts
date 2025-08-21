import { ClientOrmEntity } from '../../domain/entities/client.entity';
import { Client } from '../../domain/entities/client';

// Este archivo define funciones para convertir entre:
// - Entidad del ORM (ClientOrmEntity) → usada por la base de datos
// - Entidad de dominio (Client) → usada por la lógica de negocio

// toDomain se usa cuando traes datos desde la base de datos.
// Convierte una entidad del ORM en una entidad de dominio pura.
export function toDomain(entity: ClientOrmEntity): Client {
  return new Client(
    entity.client_id,
    entity.commerce?.commerce_id ?? '', // Si no hay comercio, se asigna string vacío
    entity.country?.country_id ?? '',   // Si no hay país, se asigna string vacío
    entity.fullname,
    entity.document,
    entity.document_format,
    entity.documentType?.document_type_id ?? '', // Si no hay tipo de documento, se asigna string vacío
    !!entity.blocked, // Se convierte a booleano
    entity.blocked_restriction?.toISOString() ?? null, // Se convierte a string ISO si existe
    entity.note,
    entity.created_at,
    entity.updated_at,
    entity.deleted_at,
  );
}

// toPersistence se usa cuando vas a guardar o actualizar datos en la base de datos.
// Convierte una entidad de dominio en una estructura que el ORM pueda entender.
export function toPersistence(domain: Client): Partial<ClientOrmEntity> {
  return {
    client_id: domain.id,
    commerce: { id: domain.commerceId } as any, // Se transforma en objeto compatible con ORM
    country: { id: domain.countryId } as any,
    fullname: domain.fullname,
    document: domain.document,
    document_format: domain.documentFormat,
    documentType: { id: domain.documentTypeId } as any,
    blocked: domain.blocked ? 1 : 0, // Se transforma a número para el ORM
    blocked_restriction: domain.blockedRestriction ? new Date(domain.blockedRestriction) : undefined,
    note: domain.note ?? undefined,
    created_at: domain.createdAt,
    updated_at: domain.updatedAt,
    deleted_at: domain.deletedAt,
  };
}
