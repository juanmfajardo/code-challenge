import { Router } from 'express';
import {
    addSentence, getSentences, getSentence, deleteSentence, updateSentence,
} from '../controllers/sentences.js';

import { asyncHandler } from '../../utils/index.js';

const sentencesRoutes = Router();

const sentences = (router) => {
    router.use('/sentences', sentencesRoutes);

    sentencesRoutes.post('/', asyncHandler(addSentence));
    sentencesRoutes.get('/', asyncHandler(getSentences));
    sentencesRoutes.get('/:id', asyncHandler(getSentence));
    sentencesRoutes.delete('/:id', asyncHandler(deleteSentence));
    sentencesRoutes.patch('/:id', asyncHandler(updateSentence));
};

export default sentences;
