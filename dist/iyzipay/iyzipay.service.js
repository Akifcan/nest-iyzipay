"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IyzipayService = void 0;
const common_1 = require("@nestjs/common");
const Iyzipay = require("iyzipay");
const iyzipay_definition_1 = require("./iyzipay.definition");
let IyzipayService = class IyzipayService {
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
    installmentPrices(installmentDto) {
        return new Promise((resolve, reject) => {
            this._iyzipay().installmentInfo.retrieve({
                locale: installmentDto.locale,
                conversationId: installmentDto.conversationId,
                binNumber: installmentDto.binNumber,
                price: installmentDto.price,
            }, function (err, result) {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
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
    pay(paymentDto) {
        return new Promise((resolve, reject) => {
            this._iyzipay().payment.create(paymentDto, function (err, result) {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    }
    /**
     * @beta
     * Pay with 3d
     * @link
     * https://dev.iyzipay.com/tr/api/3d-ile-odeme
     */
    // OK
    pay3d(paymentDto) {
        return new Promise((resolve, reject) => {
            this._iyzipay().threedsInitialize.create(paymentDto, function (err, result) {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
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
    cancel(cancelDto) {
        return new Promise((resolve, reject) => {
            this._iyzipay().cancel.create(cancelDto, function (err, result) {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
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
    refund(refundDto) {
        return new Promise((resolve, reject) => {
            this._iyzipay().refund.create(refundDto, function (err, result) {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
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
    retrieve(retrieveDto) {
        return new Promise((resolve, reject) => {
            this._iyzipay().payment.retrieve(retrieveDto, function (err, result) {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
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
    create(createDto) {
        console.log(createDto);
        return new Promise((resolve, reject) => {
            this._iyzipay().card.create(createDto, function (err, result) {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    }
    /**
     * @beta
     * @desc
     * Kayıtlı kardı sorgulamak için kullanın.
     * @desc
     * You can use this method for query a saved card.
     */
    retrieveCard(cardRetrieveDto) {
        return new Promise((resolve, reject) => {
            this._iyzipay().cardList.retrieve(cardRetrieveDto, function (err, result) {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    }
};
exports.IyzipayService = IyzipayService;
__decorate([
    (0, common_1.Inject)(iyzipay_definition_1.MODULE_OPTIONS_TOKEN),
    __metadata("design:type", Object)
], IyzipayService.prototype, "options", void 0);
exports.IyzipayService = IyzipayService = __decorate([
    (0, common_1.Injectable)()
], IyzipayService);
//# sourceMappingURL=iyzipay.service.js.map