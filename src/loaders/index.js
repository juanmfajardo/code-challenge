import expressLoader from './express.js';
import templateLoader from './templateEngine.js';

const loaders = async (app) => {
    templateLoader(app);
    expressLoader(app);
};

export default loaders;
