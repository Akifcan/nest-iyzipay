import {
  IsNotEmpty,
  IsNumberString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { IyzipayDto } from './iyzipay.dto';

export class IyzipayInstallmentDto extends IyzipayDto {
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(6)
  binNumber: string;

  @IsNotEmpty()
  @IsNumberString()
  price: string;
}
