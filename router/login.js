const express = require('express');
const router = express.Router();
const genToken = require('../middleware/authentication.js').generateAccess;
const bodyParser = require('body-parser');

// Parse application/json
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', async (req, res) => { 
    const user = req.headers.username;
    const pass = req.headers.password;

    if(user == 'admin' && pass == 'password1'){
        const token = genToken(user); // Generate token
        res.json({ token: token }); // Send token as JSON response
    }
    else {
        res.redirect(`${req.protocol}://${req.get('host')}/error`);
    }
});

module.exports.login = router;