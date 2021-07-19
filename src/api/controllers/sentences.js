import response from './responses.js';

import {
    createSentence, querySentences, querySentence, removeSentence, modifySentence,
} from '../repositories/sentences.js';

export const addSentence = async (req, res) => {
    const { text, cats } = req.body;

    const sentence = await createSentence({ text, cats });

    return response.success(res, 'Sentence successfully added', { data: { id: sentence.id } });
};

export const getSentences = async (req, res) => {
    const { order, offset, limit } = req.query;

    const rawSentences = await querySentences(
        { order, offset: parseInt(offset, 10), limit: parseInt(limit, 10) },
    );

    const sentences = rawSentences.docs.map((doc) => {
        const { id } = doc;
        const data = doc.data();

        return { id, ...data };
    });

    return response.success(res, 'Sentences successfully obtained', { data: sentences });
};

export const getSentence = async (req, res) => {
    const { id } = req.params;

    const sentence = await querySentence(id);
    if (!sentence) {
        return response.notFound(res, 'Sentence not found');
    }
    return response.success(res, 'Sentence successfully obtained', { data: sentence });
};

export const deleteSentence = async (req, res) => {
    const { id } = req.params;

    const sentence = await removeSentence(id);
    if (!sentence) {
        return response.notFound(res, 'Sentence not found');
    }
    return response.success(res, 'Sentence successfully removed');
};

export const updateSentence = async (req, res) => {
    const { text, cats } = req.body;
    const { id } = req.params;

    const sentence = await modifySentence({ id, text, cats });
    if (!sentence) {
        return response.notFound(res, 'Sentence not found');
    }
    return response.success(res, 'Sentence successfully updated', { data: { text, cats } });
};
