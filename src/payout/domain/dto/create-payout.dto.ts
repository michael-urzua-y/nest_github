import {
  IsString,
  IsEmail,
  IsBoolean,
  IsOptional,
  IsUUID,
  IsIP,
} from 'class-validator';

export class CreatePayoutDto {
  @IsUUID()
  payout_id: string;

  
}
