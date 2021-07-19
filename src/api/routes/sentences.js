import { Router } from 'express';
import {
    addSentence, getSentences, getSentence, deleteSentence, updateSentence,
} from '../controllers/sentences.js';

import {
    validate,
    addSentenceValidation,
    idValidation,
    updateValidation,
    getSentencesValidation,
} from '../middlewares/validators.js';

import { asyncHandler } from '../../utils/index.js';

const sentencesRoutes = Router();

const sentences = (router) => {
    router.use('/sentences', sentencesRoutes);

    sentencesRoutes.post('/', addSentenceValidation(), validate, asyncHandler(addSentence));
    sentencesRoutes.get('/', getSentencesValidation(), validate, asyncHandler(getSentences));
    sentencesRoutes.get('/:id', idValidation(), validate, asyncHandler(getSentence));
    sentencesRoutes.delete('/:id', idValidation(), validate, asyncHandler(deleteSentence));
    sentencesRoutes.patch('/:id', updateValidation(), validate, asyncHandler(updateSentence));
};

export default sentences;
