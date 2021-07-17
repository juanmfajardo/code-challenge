import express from 'express';

import config from './src/config/index.js';
import loaders from './src/loaders/index.js';

const app = express();

const startServer = async () => {
    await loaders(app);

    app.listen(config.PORT, () => {
        console.log(`Backend running on port ${config.PORT} 🚀`);
    });

    app.on('error', (err) => {
        console.log(err);
        process.exit(1);
    });
};

startServer();

export default app;
