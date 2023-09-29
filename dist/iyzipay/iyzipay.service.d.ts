import { IyzipayInstallmentDto } from './dtos/installment.dto';
import { IyzipayCardRetrieveProps, IyzipayCreateCardProps, IyzipayInstallmentSuccessProps, IyzipayPaySuccessProps, IyzipaySuccess3DProps, IyzipaySuccessCancelProps } from './interface/iyzipay.interface';
import { Iyzipay3dPayDto, IyzipayPayDto } from './dtos/pay.dto';
import { IyzipayCancelPayDto } from './dtos/cancel.dto';
import { IyzipayRefundDto } from './dtos/refund.dto';
import { IyzipayRetrieveDto } from './dtos/retrieve.dto';
import { IyzipayCreateDto } from './dtos/create.dto';
import { IyzipayCardRetrieveDto } from './dtos/card-retrieve.dto';
export declare class IyzipayService {
    private options;
    _iyzipay(): any;
    /**
     * @beta
     * @desc
     * Taksitlendirme fiyatları için kullanın.
     * @desc
     * You can use this method for see installment prices.
     * @link
     * https://dev.iyzipay.com/tr/api/taksit-sorgulama
     */
    installmentPrices(installmentDto: IyzipayInstallmentDto): Promise<IyzipayInstallmentSuccessProps>;
    /**
     * @beta
     * @desc
     * Pay without 3d
     * @link
     * https://dev.iyzipay.com/tr/api/odeme
     */
    pay(paymentDto: IyzipayPayDto): Promise<IyzipayPaySuccessProps>;
    /**
     * @beta
     * Pay with 3d
     * @link
     * https://dev.iyzipay.com/tr/api/3d-ile-odeme
     */
    pay3d(paymentDto: Iyzipay3dPayDto): Promise<IyzipaySuccess3DProps>;
    /**
     * @beta
     * @desc
     * Ödeme sorgulamak iptal etmek için kullanın.
     * @desc
     * You can use this method for cancel a payment.
     * @link
     * https://dev.iyzipay.com/tr/api/iptal
     */
    cancel(cancelDto: IyzipayCancelPayDto): Promise<IyzipaySuccessCancelProps>;
    /**
     * @beta
     * @desc
     * Ödeme iptal etmek için kullanın.
     * @desc
     * You can use this method for refund a payment.
     * @link
     * https://dev.iyzipay.com/tr/api/iade
     */
    refund(refundDto: IyzipayRefundDto): Promise<IyzipayPaySuccessProps>;
    /**
     * @beta
     * @desc
     * Ödeme sorgulamak için kullanın.
     * @desc
     * You can use this method for query a payment.
     * @link
     * https://dev.iyzipay.com/tr/api/odeme-sorgulama
     */
    retrieve(retrieveDto: IyzipayRetrieveDto): Promise<IyzipayPaySuccessProps>;
    /**
     * @beta
     * @desc
     * Kartı kayıt etmek için kullanın
     * @desc
     * You can use this method for save a card.
     * @desc
     * cardtoken değerini saklayabilirsiniz.
     * @desc
     * Mevcut bir kullanıcının kartını kayıt etmek isterseniz cardUserKey değerini kullanabilirsiniz.
     * @desc
     * You can use cardUserKey props if you want to save a card to existing user.
     * @desc
     * You can save cardtoken and carduserkey property
     */
    create(createDto: IyzipayCreateDto): Promise<IyzipayCreateCardProps>;
    /**
     * @beta
     * @desc
     * Kayıtlı kardı sorgulamak için kullanın.
     * @desc
     * You can use this method for query a saved card.
     */
    retrieveCard(cardRetrieveDto: IyzipayCardRetrieveDto): Promise<IyzipayCardRetrieveProps>;
}
//# sourceMappingURL=iyzipay.service.d.ts.map