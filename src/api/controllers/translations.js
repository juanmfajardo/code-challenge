/* eslint-disable import/prefer-default-export */

import response from './responses.js';
import {
    translateText,
} from '../../services/deepl.js';

export const getTranslation = async (req, res) => {
    const {
        text, source, target, cats,
    } = req.body;

    const translateProperties = {
        text,
        source,
        target: target || 'EN',
    };

    const translation = await translateText(translateProperties);
    if (!translation) {
        return response.notFound(res, 'Translation not found');
    }

    return response.success(res, 'Translation successfully obtained', { data: { text: translation, cats } });
};
