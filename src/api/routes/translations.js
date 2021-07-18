import { Router } from 'express';
import { getTranslation } from '../controllers/translations.js';
import { translationValidation, validate } from '../middlewares/validators.js';

import { asyncHandler } from '../../utils/index.js';

const translationRoutes = Router();

const translations = (router) => {
    router.use('/translations', translationRoutes);

    translationRoutes.post('/', translationValidation(), validate, asyncHandler(getTranslation));
};

export default translations;
