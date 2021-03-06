const {Router} = require('express');
const userController = require('../controllers/userController');


const router = Router();



router.post('/signup', userController.signup);

router.post('/login', userController.login);

router.post('/add-tag', userController.addTag);

router.get('/tags', userController.getTags);

module.exports = router;