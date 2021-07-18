const response = {};

response.success = (res, message, extraParams) => {
    res.status(200).json({
        status: 'success',
        message,
        ...extraParams,
    });
};

response.error = (res, message, extra) => {
    res.status(500).json({
        status: 'error',
        message,
        ...extra,
    });
};

response.notFound = (res, message, extra) => {
    res.status(404).json({
        status: 'not found',
        message,
        ...extra,
    });
};

response.badData = (res, message, extra) => {
    res.status(422).json({
        status: 'bad data',
        message,
        ...extra,
    });
};

export default response;
