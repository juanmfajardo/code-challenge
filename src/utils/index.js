export const exit = async (message) => {
    console.log(message);
    process.exit(0);
};

export const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res);
    } catch (error) {
        next(error);
    }
};
