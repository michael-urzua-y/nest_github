import {
  IsString,
  IsEmail,
  IsBoolean,
  IsOptional,
  IsUUID,
  IsIP,
} from 'class-validator';

export class CreateUserDto {
  @IsUUID()
  user_id: string;

  @IsUUID()
  commerce_id: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsIP()
  ip: string;

  @IsString()
  role: string;

  @IsString()
  permissions: string;

  @IsString()
  position: string;

  @IsBoolean()
  is_active: boolean;
}
