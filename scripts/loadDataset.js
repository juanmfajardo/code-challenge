/* eslint-disable consistent-return */
import admin from 'firebase-admin';
import fs from 'fs/promises';
import _ from 'lodash';

import { parseDataset, exit } from './utils.js';

const readFirebaseCertificate = async () => JSON.parse(await fs.readFile(`${process.cwd()}/src/config/code-challenge-4a5f2-firebase-adminsdk-pf09b-2f7dfd97e3.json`, 'utf8'));

const initFirestore = async () => {
    try {
        const adminCertificate = await readFirebaseCertificate();
        admin.initializeApp({
            credential: admin.credential.cert(adminCertificate),
        });
    } catch (error) {
        exit(error);
    }
};

const storeDataset = async (parsedDataset) => {
    try {
        const db = admin.firestore();

        const chunkedDataset = _.chunk(parsedDataset, 500);

        chunkedDataset.forEach((chunk) => {
            const batch = db.batch();

            chunk.forEach((document) => {
                const docRef = db.collection('sentences').doc();
                batch.set(docRef, document);
            });

            batch.commit();
        });
    } catch (error) {
        exit(error);
    }
};

const loadDataset = async () => {
    await initFirestore();
    const parsedDataset = await parseDataset();
    await storeDataset(parsedDataset);
};

loadDataset();
