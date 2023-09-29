import { ConfigurableModuleBuilder } from '@nestjs/common';

export interface IyzipayModuleOptions {
  apiKey: string;
  secretKey: string;
}

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<IyzipayModuleOptions>().build();
