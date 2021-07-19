/* eslint-disable consistent-return */
import admin from 'firebase-admin';
import fs from 'fs/promises';

import { exit } from '../utils/index.js';

let db = null;

const readFirebaseCertificate = async () => JSON.parse(await fs.readFile(`${process.cwd()}/src/config/code-challenge-4a5f2-firebase-adminsdk-pf09b-2f7dfd97e3.json`, 'utf8'));

export const firestoreLoader = async () => {
    try {
        const adminCertificate = await readFirebaseCertificate();
        admin.initializeApp({
            credential: admin.credential.cert(adminCertificate),
        });

        db = admin.firestore();
    } catch (error) {
        exit(error);
    }
};

export const getDb = () => db;

export const getSentencesCollection = () => db.collection('sentences');
