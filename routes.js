const router = require('express').Router();
const {
    body
} = require('express-validator');
const {
    checkBalance
} = require('./controllers/checkBalanceController'); 
const {
    checkMintable, getMintData
} = require('./controllers/mintController');
const {
    twitterVerify,
    retweetVerify
} = require('./controllers/twitterVerifyController');
const {
    discordVerify
} = require('./controllers/discordVerifyController');
const { signUp } = require('./controllers/signUpController');
const { checkUser } = require('./controllers/checkUserController');

router.post('/checkUser', [body('address')], checkUser);
router.post('/checkMintable', [body('address')], checkMintable);
router.post('/getMintData', [body('address', 'count')], getMintData);
router.post('/checkBalance', [body('address')], checkBalance);
router.post('/twitterVerify', [body('twitterUserName')], twitterVerify);
router.post('/retweetVerify', [body('twitterUserName')], retweetVerify);
router.post('/discordVerify', [body('discordUserName')], discordVerify);
router.post('/signup', [body('address', 'twitterUserName', 'discordUserName')], signUp)
router.get('/test', function (request, response) {
    response.send('Server is running');
});
router.get('/asdf',function (request, response) {
    response.send('Server is asdfasdf');
});





module.exports = router;