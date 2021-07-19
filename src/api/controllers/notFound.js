import response from './responses.js';

const handleNotFound = (req, res) => response.notFound(res, 'Endpoint Not Found');

export default handleNotFound;
