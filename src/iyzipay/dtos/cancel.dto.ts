import { IsIP, IsNotEmpty, IsOptional } from 'class-validator';
import { IyzipayDto } from './iyzipay.dto';

export class IyzipayCancelPayDto extends IyzipayDto {
  @IsNotEmpty()
  paymentId: string;

  @IsOptional()
  @IsIP()
  ip: string;
}
