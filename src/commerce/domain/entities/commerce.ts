export class Commerce {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly document: string,
    public readonly documentFormat: string,
    public readonly isoCode: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly deletedAt: Date | null,
  ) {}
}
