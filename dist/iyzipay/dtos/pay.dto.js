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
exports.Iyzipay3dPayDto = exports.IyzipayPayDto = void 0;
const class_validator_1 = require("class-validator");
const iyzipay_dto_1 = require("./iyzipay.dto");
class IyzipayPayDto extends iyzipay_dto_1.IyzipayDto {
}
exports.IyzipayPayDto = IyzipayPayDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], IyzipayPayDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], IyzipayPayDto.prototype, "paidPrice", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], IyzipayPayDto.prototype, "currency", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], IyzipayPayDto.prototype, "installment", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], IyzipayPayDto.prototype, "basketId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], IyzipayPayDto.prototype, "paymentChannel", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], IyzipayPayDto.prototype, "paymentGroup", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], IyzipayPayDto.prototype, "paymentCard", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], IyzipayPayDto.prototype, "buyer", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], IyzipayPayDto.prototype, "shippingAddress", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], IyzipayPayDto.prototype, "billingAddress", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], IyzipayPayDto.prototype, "basketItems", void 0);
class Iyzipay3dPayDto extends IyzipayPayDto {
}
exports.Iyzipay3dPayDto = Iyzipay3dPayDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Iyzipay3dPayDto.prototype, "callbackUrl", void 0);
//# sourceMappingURL=pay.dto.js.map