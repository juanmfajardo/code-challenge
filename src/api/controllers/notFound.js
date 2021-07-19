import response from './responses.js';

const handleNotFound = (req, res) => response.notFound(res, 'Not Found');

export default handleNotFound;
