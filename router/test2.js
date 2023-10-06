const express = require('express');
const router = express.Router();
const path = require('path');
const auth = require('../middleware/authentication.js').authToken;

//This send the test2-page 
router.get('/', auth, (req, res) => { 
    res.sendFile(path.join(__dirname, '../views/test2-views/test2-page.html'));
});

router.get('/helloworld', auth, (req, res) => {
    res.status(200).send("HELLO WORLD");
});

router.get('/data', async(req, res) => {

})

module.exports.test2Routes = router;