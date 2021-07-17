import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import path from 'path';

import indexRouter from '../routes/index.js';

import notFoundController from '../api/controllers/notFound.js';
import errorController from '../api/controllers/errors.js';

const expressLoader = (app) => {
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(cors());
    app.use(express.static(path.join(`${process.cwd()}/src/`, 'public')));

    app.use('/', indexRouter);

    app.use(notFoundController);
    app.use(errorController);
};

export default expressLoader;
