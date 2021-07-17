const handleErrors = (err, req, res, next) => {
    console.error(err.message);
    return res.status(500).json({ message: 'An unknown error occurred!' });
};

export default handleErrors;
