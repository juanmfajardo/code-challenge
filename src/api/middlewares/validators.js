import {
    body, param, query, oneOf, validationResult,
} from 'express-validator';

export const translationValidation = () => [
    body('text')
        .notEmpty()
        .withMessage('text field can not be empty!'),
];

export const addSentenceValidation = () => [
    body('text')
        .notEmpty()
        .withMessage('text field can not be empty!'),
    body('cats')
        .notEmpty()
        .withMessage('cats field can not be empty!')
        .isArray()
        .withMessage('cats field need to be an array!'),
];

export const idValidation = () => [
    param('id')
        .trim(),
];

export const updateValidation = () => [
    oneOf(
        [
            body('text').exists().isString(),
            body('cats').exists().isArray(),
        ],
    ),
];

export const getSentencesValidation = () => [
    oneOf(
        [
            query('order')
                .isIn(['asc', 'desc']),
            query('order')
                .isEmpty(),
        ],
    ),
    query('offset')
        .notEmpty()
        .withMessage('offset field can not be empty!'),
    query('limit')
        .notEmpty()
        .withMessage('limit field can not be empty!'),

];

export const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) return next();

    const extractedErrors = [];
    errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

    return res.status(422).json({ errors: extractedErrors });
};
