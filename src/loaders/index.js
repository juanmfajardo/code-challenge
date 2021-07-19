import templateLoader from './templateEngine.js';
import expressLoader from './express.js';
import { firestoreLoader } from './firestore.js';

const loaders = async (app) => {
    templateLoader(app);
    expressLoader(app);
    await firestoreLoader();
};

export default loaders;
