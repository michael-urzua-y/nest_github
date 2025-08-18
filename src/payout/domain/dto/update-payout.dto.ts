import {
  IsString,
  IsEmail,
  IsBoolean,
  IsOptional,
  IsUUID,
  IsIP,
} from 'class-validator';

export class UpdatePayoutDto {
  @IsOptional()
  @IsString()
  name?: string;

  
}
