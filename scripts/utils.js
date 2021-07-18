/* eslint-disable consistent-return */

import fs from 'fs/promises';
import Debug from 'debug';

const debug = Debug('script:');

export const exit = async (message) => {
    debug(message);
    process.exit(0);
};

const readParseDataset = async () => {
    const filename = process.argv[2];
    debug(filename);
    if (!filename) {
        return false;
    }

    try {
        const dataset = await fs.readFile(`${process.cwd()}/scripts/data/${filename}`, 'utf8');
        const parsedDataset = dataset.split('\n').map((elem) => {
            const parsedElement = JSON.parse(elem);
            parsedElement.cats = Object.keys(parsedElement.cats)
                .filter((key) => parsedElement.cats[key]);
            return parsedElement;
        });

        return parsedDataset;
    } catch (error) {
        exit(error);
    }
};

export const parseDataset = async () => {
    try {
        const parsedDataset = await readParseDataset();
        if (!parsedDataset) exit('Filename need to be passed as argument: npm run load-dataset sentences10.jsonl');
        return parsedDataset;
    } catch (error) {
        exit(error);
    }
};
