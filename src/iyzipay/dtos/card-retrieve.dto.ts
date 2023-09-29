import { IsNotEmpty } from 'class-validator';
import { IyzipayDto } from './iyzipay.dto';

export class IyzipayCardRetrieveDto extends IyzipayDto {
  @IsNotEmpty()
  cardUserKey: string;
}
