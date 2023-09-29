export type IyzipayLocale = 'tr' | 'en';
export type IyzipayStatus = 'success' | 'failure';
export type IyzipayCard = 'DEBIT_CARD' | 'CREDIT_CARD';
export type IyzipayBasketItemType = 'PHYSICAL' | 'VIRTUAL';
export type IyzipaySubscriptionInitialStatus = 'ACTIVE' | 'PENDING';
export type IyzipaySubscriptionStatus = 'EXPIRED' | 'UNPAID' | 'CANCELED' | 'ACTIVE' | 'PENDING' | 'UPGRADED';
export type IyzipayPaymentGroup = 'PRODUCT' | 'LISTING' | 'SUBSCRIPTION';
export type IyzipayCurrency = 'TRY' | 'EUR' | 'USD' | 'IRR' | 'GBP' | 'NOK' | 'RUB' | 'CHF';
export type IyzipayPaymentChannel = 'MOBILE' | 'WEB' | 'MOBILE_WEB' | 'MOBILE_IOS' | 'MOBILE_ANDROID' | 'MOBILE_WINDOWS' | 'MOBILE_TABLET' | 'MOBILE_PHONE';
export interface IyzipayInstallmentSuccessProps {
    status: IyzipayStatus;
    locale: IyzipayLocale;
    systemTime: number;
    conversationId: string;
    installmentDetails: {
        binNumber: string;
        price: number;
        cardType: IyzipayCard;
        cardAssociation: string;
        cardFamilyName: string;
        force3ds: number;
        bankCode: number;
        bankName: string;
        forceCvc: number;
        commercial: number;
        dccEnabled: number;
        installmentPrices: {
            installmentPrice: number;
            totalPrice: number;
            installmentNumber: number;
        }[];
    }[];
}
export interface IyzipayErrorProps {
    status: IyzipayStatus;
    errorCode: string;
    errorMessage: string;
    locale: IyzipayLocale;
    systemTime: number;
    conversationId: string;
}
export interface IyzipayPaySuccessProps {
    status: IyzipayStatus;
    locale: IyzipayLocale;
    systemTime: number;
    conversationId: string;
    price: number;
    paidPrice: number;
    installment: number;
    paymentId: string;
    fraudStatus: number;
    merchantCommissionRate: number;
    merchantCommissionRateAmount: number;
    iyziCommissionRateAmount: number;
    iyziCommissionFee: number;
    cardType: IyzipayCard;
    cardAssociation: string;
    cardFamily: string;
    binNumber: string;
    lastFourDigits: string;
    basketId: string;
    currency: IyzipayCurrency;
    itemTransactions: {
        itemId: string;
        paymentTransactionId: string;
        transactionStatus: number;
        price: number;
        paidPrice: number;
        merchantCommissionRate: number;
        merchantCommissionRateAmount: number;
        iyziCommissionRateAmount: number;
        iyziCommissionFee: number;
        blockageRate: number;
        blockageRateAmountMerchant: number;
        blockageRateAmountSubMerchant: number;
        blockageResolvedDate: Date;
        subMerchantPrice: number;
        subMerchantPayoutRate: number;
        subMerchantPayoutAmount: number;
        convertedPayout: {
            paidPrice: number;
            iyziCommissionRateAmount: number;
            iyziCommissionFee: number;
            blockageRateAmountMerchant: number;
            blockageRateAmountSubMerchant: number;
            subMerchantPayoutAmount: number;
            merchantPayoutAmount: number;
            iyziConversionRate: number;
            iyziConversionRateAmount: number;
            currency: IyzipayCurrency;
        };
    }[];
    authCode: string;
    phase: string;
    hostReference: string;
}
export interface IyzipaySuccess3DProps {
    status: IyzipayStatus;
    locale: IyzipayLocale;
    systemTime: number;
    conversationId: string;
    threeDSHtmlContent: string;
}
export interface IyzipaySuccess3DConfirmProps {
    status: IyzipayStatus;
    locale: IyzipayLocale;
    conversationData: string;
    conversationId: string;
    mdStatus: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
}
export interface IyzipaySuccessCancelProps {
    status: IyzipayStatus;
    locale: IyzipayLocale;
    systemTime: number;
    conversationId: string;
    paymentId: string;
    price: string;
    currency: IyzipayCurrency;
    authCode: string;
    hostReference: string;
}
export interface IyzipaySuccessRefundProps {
    status: IyzipayStatus;
    locale: IyzipayLocale;
    systemTime: number;
    conversationId: string;
    paymentId: string;
    price: string;
    paymentTransactionId: string;
    currency: IyzipayCurrency;
    authCode: string;
    hostReference: string;
    retryable: boolean;
}
export interface IyzipayCreateCardProps {
    status: IyzipayStatus;
    locale: IyzipayLocale;
    systemTime: number;
    conversationId: string;
    externalId: string;
    email: string;
    cardUserKey: string;
    cardToken: string;
    cardAlias: string;
    binNumber: string;
    cardType: IyzipayCard;
    cardAssociation: string;
    cardFamily: string;
    cardBankCode: number;
    cardBankName: string;
}
export interface IyzipayCardRetrieveProps {
    status: IyzipayStatus;
    locale: IyzipayLocale;
    systemTime: number;
    conversationId: string;
    cardUserKey: string;
    cardDetails: {
        cardToken: string;
        cardAlias: string;
        binNumber: string;
        cardType: IyzipayCard;
        cardAssociation: string;
        cardFamily: string;
        cardBankCode: string;
        cardBankName: string;
    }[];
}
export interface IyzipayModuleProps {
    apiKey: string;
    secretKeey: string;
}
//# sourceMappingURL=iyzipay.interface.d.ts.map