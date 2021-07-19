import express from 'express';

import config from './src/config/index.js';
import loaders from './src/loaders/index.js';
import { exit } from './src/utils/index.js';

const app = express();

const startServer = async () => {
    await loaders(app);

    app.listen(config.PORT, () => {
        console.log(`Backend running on port ${config.PORT} 🚀`);
    });

    app.on('error', (error) => {
        exit(error);
    });
};

startServer();

export default app;
