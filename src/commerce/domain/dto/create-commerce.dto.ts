import { IsString } from 'class-validator';

export class CreateCommerceDto {
  @IsString()
  name: string;

  @IsString()
  document: string;

  @IsString()
  document_format: string;

  @IsString()
  iso_code: string;
}