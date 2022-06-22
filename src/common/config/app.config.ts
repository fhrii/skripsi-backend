import { registerAs } from '@nestjs/config';
import ENV from '../enum/node_env.enum';

export interface AppConfig {
  NODE_ENV: string;
  PORT: number;
}

const appConfig = registerAs<AppConfig>('app', () => ({
  NODE_ENV: process.env.NODE_ENV || ENV.DEVELOPMENT,
  PORT: parseInt(process.env.PORT, 10) || 5000,
  ML_SERVER: process.env.ML_SERVER || 'http://localhost:7000/detector',
}));

export default appConfig;
