import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IyzipayDto } from './iyzipay.dto';

export class IyzipayCreateDto extends IyzipayDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  externalId: string;
  @IsOptional()
  @IsString()
  cardUserKey?: string;
  @IsNotEmpty()
  card: {
    cardAlias: string;
    cardHolderName: string;
    cardNumber: string;
    expireMonth: string;
    expireYear: string;
  };
}
