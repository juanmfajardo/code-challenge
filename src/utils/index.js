/* eslint-disable import/prefer-default-export */
export const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res);
    } catch (error) {
        next(error);
    }
};
