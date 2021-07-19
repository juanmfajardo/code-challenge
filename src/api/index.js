import { Router } from 'express';

import translations from './routes/translations.js';
import sentences from './routes/sentences.js';

const router = Router();

const routes = () => {
    sentences(router);
    translations(router);

    return router;
};

export default routes;
