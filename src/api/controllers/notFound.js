import createError from 'http-errors';

const handleNotFound = (req, res, next) => {
    next(createError(404));
};

export default handleNotFound;
