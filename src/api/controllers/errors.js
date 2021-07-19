/* eslint-disable no-unused-vars */
import response from './responses.js';

const handleErrors = (err, req, res, next) => {
    console.log(err.message);
    return response.error(res, `An unknown error occurred! - ${err.message}`);
};

export default handleErrors;
