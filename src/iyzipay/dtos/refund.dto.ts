import { IsIP, IsNotEmpty, IsOptional } from 'class-validator';
import { IyzipayDto } from './iyzipay.dto';
import { IyzipayCurrency } from '../interface/iyzipay.interface';

export class IyzipayRefundDto extends IyzipayDto {
  @IsNotEmpty()
  paymentTransactionId: string;

  @IsNotEmpty()
  price: string;

  @IsNotEmpty()
  currency: IyzipayCurrency;

  @IsOptional()
  @IsIP()
  ip: string;
}
