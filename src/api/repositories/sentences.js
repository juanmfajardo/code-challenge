import _ from 'lodash';

import { getSentencesCollection } from '../../loaders/firestore.js';

export const createSentence = async (sentenceFields) => {
    const collection = getSentencesCollection();
    return collection.add(sentenceFields);
};

export const querySentences = async ({ order, offset, limit }) => {
    const collection = getSentencesCollection();
    let sentences;

    const startAt = offset * limit;

    if (startAt) {
        if (order === undefined) {
            const firstElements = await collection.limit(startAt).get();
            const lastElement = firstElements.docs[firstElements.docs.length - 1];

            sentences = await collection.startAfter(lastElement).limit(limit).get();
        } else {
            const firstElements = await collection.orderBy('cats', order).limit(startAt).get();
            const lastElement = firstElements.docs[firstElements.docs.length - 1];

            sentences = await collection.orderBy('cats', order).startAfter(lastElement).limit(limit).get();
        }
    } else {
        sentences = order === undefined
            ? await collection.limit(limit).get()
            : await await collection.orderBy('cats', order).limit(limit).get();
    }

    return sentences;
};

export const querySentence = async (id) => {
    const collection = getSentencesCollection();
    const sentence = await collection.doc(id).get();

    if (sentence.exists) {
        return sentence.data();
    }
    return false;
};

export const removeSentence = async (id) => {
    const collection = getSentencesCollection();
    const sentence = await collection.doc(id).get();

    if (sentence.exists) {
        await collection.doc(id).delete();
        return true;
    }
    return false;
};

export const modifySentence = async (fields) => {
    const { id, ...sentenceFields } = fields;

    const fieldsToUpdate = _.omitBy(sentenceFields, _.isNil);

    const collection = getSentencesCollection();
    const sentence = await collection.doc(id).get();

    if (sentence.exists) {
        await collection.doc(id).update(fieldsToUpdate);
        return true;
    }
    return false;
};
