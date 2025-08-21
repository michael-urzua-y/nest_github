export class Client {
  constructor(
    public readonly id: string,
    public readonly commerceId: string,
    public readonly countryId: string,
    public readonly fullname: string,
    public readonly document: string,
    public readonly documentFormat: string,
    public readonly documentTypeId: string,
    public readonly blocked: boolean,
    public readonly blockedRestriction: string | null,
    public readonly note: string | null,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly deletedAt: Date | null,
  ) {}
}
