import { IsNotEmpty } from 'class-validator';
import {
  IyzipayBasketItemType,
  IyzipayCurrency,
  IyzipayPaymentChannel,
  IyzipayPaymentGroup,
} from '../interface/iyzipay.interface';
import { IyzipayDto } from './iyzipay.dto';

export class IyzipayPayDto extends IyzipayDto {
  @IsNotEmpty()
  price: string;
  @IsNotEmpty()
  paidPrice: string;
  @IsNotEmpty()
  currency: IyzipayCurrency;
  @IsNotEmpty()
  installment: string;
  @IsNotEmpty()
  basketId: string;
  @IsNotEmpty()
  paymentChannel: IyzipayPaymentChannel;
  @IsNotEmpty()
  paymentGroup: IyzipayPaymentGroup;
  @IsNotEmpty()
  paymentCard: {
    cardHolderName: string;
    cardNumber: string;
    expireMonth: string;
    expireYear: string;
    cvc: string;
  };
  @IsNotEmpty()
  buyer: {
    id: string;
    name: string;
    surname: string;
    gsmNumber: string;
    email: string;
    identityNumber?: string;
    lastLoginDate?: string;
    registrationDate?: string;
    registrationAddress: string;
    ip?: string;
    city: string;
    country: string;
    zipCode: string;
  };
  @IsNotEmpty()
  shippingAddress: {
    contactName: string;
    city: string;
    country: string;
    address: string;
    zipCode: string;
  };
  @IsNotEmpty()
  billingAddress: {
    contactName: string;
    city: string;
    country: string;
    address: string;
    zipCode: string;
  };
  @IsNotEmpty()
  basketItems: {
    id: string;
    name: string;
    category1: string;
    category2?: string;
    itemType: IyzipayBasketItemType;
    price: string;
  }[];
}

export class Iyzipay3dPayDto extends IyzipayPayDto {
  @IsNotEmpty()
  callbackUrl: string;
}
