import { Inject, Injectable } from '@nestjs/common';
import { IyzipayInstallmentDto } from './dtos/installment.dto';
import * as Iyzipay from 'iyzipay';
import {
  IyzipayCardRetrieveProps,
  IyzipayCreateCardProps,
  IyzipayErrorProps,
  IyzipayInstallmentSuccessProps,
  IyzipayPaySuccessProps,
  IyzipaySuccess3DProps,
  IyzipaySuccessCancelProps,
} from './interface/iyzipay.interface';
import { Iyzipay3dPayDto, IyzipayPayDto } from './dtos/pay.dto';
import { IyzipayCancelPayDto } from './dtos/cancel.dto';
import { IyzipayRefundDto } from './dtos/refund.dto';
import { IyzipayRetrieveDto } from './dtos/retrieve.dto';
import { IyzipayCreateDto } from './dtos/create.dto';
import { IyzipayCardRetrieveDto } from './dtos/card-retrieve.dto';
import {
  IyzipayModuleOptions,
  MODULE_OPTIONS_TOKEN,
} from './iyzipay.definition';

@Injectable()
export class IyzipayService {
  @Inject(MODULE_OPTIONS_TOKEN) private options: IyzipayModuleOptions;

  _iyzipay() {
    const iyzipay = new Iyzipay({
      apiKey: this.options.apiKey,
      secretKey: this.options.secretKey,
      uri: 'https://sandbox-api.iyzipay.com',
    });
    return iyzipay;
  }

  /**
   * @beta
   * @desc
   * Taksitlendirme fiyatları için kullanın.
   * @desc
   * You can use this method for see installment prices.
   * @link
   * https://dev.iyzipay.com/tr/api/taksit-sorgulama
   */
  installmentPrices(installmentDto: IyzipayInstallmentDto) {
    return new Promise<IyzipayInstallmentSuccessProps>((resolve, reject) => {
      this._iyzipay().installmentInfo.retrieve(
        {
          locale: installmentDto.locale,
          conversationId: installmentDto.conversationId,
          binNumber: installmentDto.binNumber,
          price: installmentDto.price,
        },
        function (
          err: IyzipayErrorProps,
          result: IyzipayInstallmentSuccessProps,
        ) {
          if (err) {
            reject(err);
          }
          resolve(result);
        },
      );
    });
  }

  /**
   * @beta
   * @desc
   * Pay without 3d
   * @link
   * https://dev.iyzipay.com/tr/api/odeme
   */

  // OK
  pay(paymentDto: IyzipayPayDto) {
    return new Promise<IyzipayPaySuccessProps>((resolve, reject) => {
      this._iyzipay().payment.create(
        paymentDto,
        function (err: IyzipayErrorProps, result: IyzipayPaySuccessProps) {
          if (err) {
            reject(err);
          }
          resolve(result);
        },
      );
    });
  }

  /**
   * @beta
   * Pay with 3d
   * @link
   * https://dev.iyzipay.com/tr/api/3d-ile-odeme
   */

  // OK
  pay3d(paymentDto: Iyzipay3dPayDto) {
    return new Promise<IyzipaySuccess3DProps>((resolve, reject) => {
      this._iyzipay().threedsInitialize.create(
        paymentDto,
        function (err: IyzipayErrorProps, result: IyzipaySuccess3DProps) {
          if (err) {
            reject(err);
          }
          resolve(result);
        },
      );
    });
  }

  /**
   * @beta
   * @desc
   * Ödeme sorgulamak iptal etmek için kullanın.
   * @desc
   * You can use this method for cancel a payment.
   * @link
   * https://dev.iyzipay.com/tr/api/iptal
   */

  // OK
  cancel(cancelDto: IyzipayCancelPayDto) {
    return new Promise<IyzipaySuccessCancelProps>((resolve, reject) => {
      this._iyzipay().cancel.create(
        cancelDto,
        function (err: IyzipayErrorProps, result: IyzipaySuccessCancelProps) {
          if (err) {
            reject(err);
          }
          resolve(result);
        },
      );
    });
  }

  /**
   * @beta
   * @desc
   * Ödeme iptal etmek için kullanın.
   * @desc
   * You can use this method for refund a payment.
   * @link
   * https://dev.iyzipay.com/tr/api/iade
   */

  // OK
  refund(refundDto: IyzipayRefundDto) {
    return new Promise<IyzipayPaySuccessProps>((resolve, reject) => {
      this._iyzipay().refund.create(
        refundDto,
        function (err: IyzipayErrorProps, result: IyzipayPaySuccessProps) {
          if (err) {
            reject(err);
          }
          resolve(result);
        },
      );
    });
  }

  /**
   * @beta
   * @desc
   * Ödeme sorgulamak için kullanın.
   * @desc
   * You can use this method for query a payment.
   * @link
   * https://dev.iyzipay.com/tr/api/odeme-sorgulama
   */

  // OK
  retrieve(retrieveDto: IyzipayRetrieveDto) {
    return new Promise<IyzipayPaySuccessProps>((resolve, reject) => {
      this._iyzipay().payment.retrieve(
        retrieveDto,
        function (err: IyzipayErrorProps, result: IyzipayPaySuccessProps) {
          if (err) {
            reject(err);
          }
          resolve(result);
        },
      );
    });
  }

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
  create(createDto: IyzipayCreateDto) {
    console.log(createDto);
    return new Promise<IyzipayCreateCardProps>((resolve, reject) => {
      this._iyzipay().card.create(
        createDto,
        function (err: IyzipayErrorProps, result: IyzipayCreateCardProps) {
          if (err) {
            reject(err);
          }
          resolve(result);
        },
      );
    });
  }

  /**
   * @beta
   * @desc
   * Kayıtlı kardı sorgulamak için kullanın.
   * @desc
   * You can use this method for query a saved card.
   */
  retrieveCard(cardRetrieveDto: IyzipayCardRetrieveDto) {
    return new Promise<IyzipayCardRetrieveProps>((resolve, reject) => {
      this._iyzipay().cardList.retrieve(
        cardRetrieveDto,
        function (err: IyzipayErrorProps, result: IyzipayCardRetrieveProps) {
          if (err) {
            reject(err);
          }
          resolve(result);
        },
      );
    });
  }
}
