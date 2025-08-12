import { IsString } from 'class-validator';

export class CreateCommerceDto {
  @IsString()
  name: string;

  @IsString()
  document: string;

  @IsString()
  iso_code: string;
}
