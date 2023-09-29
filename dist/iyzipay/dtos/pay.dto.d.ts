import { IyzipayBasketItemType, IyzipayCurrency, IyzipayPaymentChannel, IyzipayPaymentGroup } from '../interface/iyzipay.interface';
import { IyzipayDto } from './iyzipay.dto';
export declare class IyzipayPayDto extends IyzipayDto {
    price: string;
    paidPrice: string;
    currency: IyzipayCurrency;
    installment: string;
    basketId: string;
    paymentChannel: IyzipayPaymentChannel;
    paymentGroup: IyzipayPaymentGroup;
    paymentCard: {
        cardHolderName: string;
        cardNumber: string;
        expireMonth: string;
        expireYear: string;
        cvc: string;
    };
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
    shippingAddress: {
        contactName: string;
        city: string;
        country: string;
        address: string;
        zipCode: string;
    };
    billingAddress: {
        contactName: string;
        city: string;
        country: string;
        address: string;
        zipCode: string;
    };
    basketItems: {
        id: string;
        name: string;
        category1: string;
        category2?: string;
        itemType: IyzipayBasketItemType;
        price: string;
    }[];
}
export declare class Iyzipay3dPayDto extends IyzipayPayDto {
    callbackUrl: string;
}
//# sourceMappingURL=pay.dto.d.ts.map