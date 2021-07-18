import { Router } from 'express';

import translations from './routes/translations.js';

const router = Router();

const routes = () => {
    translations(router);

    return router;
};

export default routes;
