import * as dotenv from 'dotenv';
import * as fs from 'fs';

export class ConfigService {
  private readonly envConfig: Record<string, string>;
  private readonly supporttedApiProviders: Array<string> = ['GITHUB', 'INDEED', 'NAUkRI'];
  constructor(filePath: string) {
    this.envConfig = dotenv.parse(fs.readFileSync(filePath))
  }

  get(key: string): string {
    return this.envConfig[key];
  }

  getSupportedApiProviders(){
    return this.supporttedApiProviders;
  }
}