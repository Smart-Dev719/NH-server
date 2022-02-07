const router = require('express').Router();
const {
    body
} = require('express-validator');
const {
    checkMintable, getMintData
} = require('./controllers/mintController');

router.post('/API/checkMintable', [body('address')], checkMintable);
router.post('/API/getMintData', [body('address', 'count')], getMintData);
router.get('/API/test', function (request, response) {
    response.send('Server is running');
});
module.exports = router;