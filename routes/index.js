const init = () => {
    const router = require('express').Router();

    const home = require('../controllers/home');
    const pessoasRouter = require('./pessoas');

    router.get('/', home.getIndex);

    router.use('/pessoas', pessoasRouter);

    return router;
}

module.exports = init