import { IsNotEmpty } from 'class-validator';
import { IyzipayDto } from './iyzipay.dto';

export class IyzipayRetrieveDto extends IyzipayDto {
  @IsNotEmpty()
  paymentId: string;
  @IsNotEmpty()
  paymentConversationId: string;
}
