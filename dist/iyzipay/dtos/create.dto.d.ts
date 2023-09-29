import { IyzipayDto } from './iyzipay.dto';
export declare class IyzipayCreateDto extends IyzipayDto {
    email: string;
    externalId: string;
    cardUserKey?: string;
    card: {
        cardAlias: string;
        cardHolderName: string;
        cardNumber: string;
        expireMonth: string;
        expireYear: string;
    };
}
//# sourceMappingURL=create.dto.d.ts.map