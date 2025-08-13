import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateClientDto {
  @IsUUID()
  @IsNotEmpty()
  countryId: string;

  @IsNotEmpty()
  fullname: string;
}
