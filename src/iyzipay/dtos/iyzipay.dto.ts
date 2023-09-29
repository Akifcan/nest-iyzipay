import { IsNotEmpty } from 'class-validator';
import { IyzipayLocale } from '../interface/iyzipay.interface';

export class IyzipayDto {
  @IsNotEmpty()
  locale: IyzipayLocale;

  @IsNotEmpty()
  conversationId: string;
}
