import { Module } from '@nestjs/common';
import { ConfigurableModuleClass } from './iyzipay.definition';
import { IyzipayService } from './iyzipay.service';

@Module({
  providers: [IyzipayService],
  exports: [IyzipayService],
})
export class IyzipayModule extends ConfigurableModuleClass {}
