import path from 'path';

const templateLoader = (app) => {
    app.set('views', path.join(`${process.cwd()}/src/`, 'views'));
    app.set('view engine', 'ejs');
};

export default templateLoader;
