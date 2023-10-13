const express = require('express');
const router = express.Router();
const genToken = require('../middleware/authentication.js').generateAccess;
const bodyParser = require('body-parser');
// const userSchema = require('../models/user.js');

// const mongoose = require('mongoose');


//  mongoose.connect(`${process.env.DB_PROTOCOL}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?${process.env.DB_PARAMS}`, {})
//     .then(async () => {
//         console.log("Connected to ATLAS");
//     }).catch((err) => {
//         console.log(err);
//     });

// process.on('SIGINT', () => {
//     mongoose.connection.close();
//     console.log('Mongoose disconnected on app termination');
//     process.exit(0);
// });

// Parse application/json
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', async (req, res) => {
    const user = req.body.username;
    const pass = req.body.password;

    // const userRecord = await userSchema.findOne({ email: "tierst01@pfw.edu" });
    // let testPass = (userRecord.password);


    if (/*pass == testPass &&*/ user === "admin" && pass === "1234") {
        const token = genToken(user); // Generate token
        res.json({ token: token }); // Send token as JSON response
    }
    else {
        res.json({ error: "login Failed" });
    }
});

module.exports.login = router;