import dayjs from 'dayjs';
import logger from 'pino';

import config from '../config';

const log = logger({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
  enabled: !(config.LOG_ENABLED === 'false'),
  timestamp: () => `,"time":"${dayjs().format()}"`,
});

export default log;
