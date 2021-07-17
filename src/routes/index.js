import express from 'express';

const router = express.Router();

/* GET home page. */
const index = router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

export default index;

