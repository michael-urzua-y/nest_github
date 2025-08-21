import { Commerce } from '../../domain/entities/commerce';

export function toDomain(entity: any): Commerce {
  return new Commerce(
    entity.commerce_id,
    entity.name,
    entity.document,
    entity.document_format,
    entity.iso_code,
    entity.created_at,
    entity.updated_at,
    entity.deleted_at,
  );
}

export function toPersistence(domain: Commerce): any {
  return {
    commerce_id: domain.id,
    name: domain.name,
    document: domain.document,
    document_format: domain.documentFormat,
    iso_code: domain.isoCode,
    created_at: domain.createdAt,
    updated_at: domain.updatedAt,
    deleted_at: domain.deletedAt,
  };
}
