/* eslint-disable import/prefer-default-export */
import translate from 'deepl';
import Debug from 'debug';

import config from '../config/index.js';

const debug = Debug('api:');

export const translateText = async ({ text, source, target }) => {
    try {
        const translation = await translate({
            free_api: true,
            text,
            source_lang: source,
            target_lang: target,
            auth_key: config.DEEPL_API_KEY,
        });

        const textTransation = translation.data.translations[0];
        return textTransation.text;
    } catch (error) {
        debug(error);
        return false;
    }
};
