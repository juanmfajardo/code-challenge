import _ from 'lodash';
import { parseDataset } from './utils.js';

const getTop100Words = (datased) => {
    const allWords = [];
    datased.forEach((element) => {
        const wordArray = element.text.toLowerCase().split(/[ ,.()]+/g);

        if (wordArray[wordArray.length - 1] === '') {
            wordArray.pop();
        }

        allWords.push(...wordArray);
    });

    const groupedWords = _.groupBy(allWords);
    const sortedGroupedWords = _.orderBy(groupedWords, (e) => e.length, ['desc']);
    return sortedGroupedWords.slice(0, 100);
};

const printTopWords = (words) => {
    const wordsInfo = words.map((elem) => ({ word: elem[0], occurrences: elem.length }));
    console.log('Top 100 words:', wordsInfo);
};

const countTop100 = async () => {
    const parsedDataset = await parseDataset();
    const topWords = getTop100Words(parsedDataset);
    printTopWords(topWords);
};

countTop100();
