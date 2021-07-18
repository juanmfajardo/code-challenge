import { body, validationResult } from 'express-validator';

export const translationValidation = () => [
    body('text')
        .notEmpty()
        .withMessage('text field can not be empty!')
        .bail(),
];

export const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) return next();

    const extractedErrors = [];
    errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

    return res.status(422).json({ errors: extractedErrors });
};
