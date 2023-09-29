import { IyzipayDto } from './iyzipay.dto';
import { IyzipayCurrency } from '../interface/iyzipay.interface';
export declare class IyzipayRefundDto extends IyzipayDto {
    paymentTransactionId: string;
    price: string;
    currency: IyzipayCurrency;
    ip: string;
}
//# sourceMappingURL=refund.dto.d.ts.map