const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// get config vars
dotenv.config();

function authenticateToken(req, res, next) {
    try {
        const authHeaderValue = req.headers.authorization;
        const token = jwt.verify(authHeaderValue, process.env.TOKEN_SECRET);
        return next();
    } catch (e) {
        console.log(e);
        return res.status(401).json({ message: "Unauthorized", error: e });
    }
}

function ensureCorrectUser(req, res, next) {
    try {
        const authHeaderValue = req.headers.authorization;
        const token = jwt.verify(authHeaderValue, process.env.TOKEN_SECRET);
        if (token.username === req.params.username) {
            return next();
        } else {
            return res.status(401).json({ message: "Unauthorized" });
        }
    } catch (e) {
        return res.status(401).json({ message: "Unauthorized" });
    }
}

function generateAccessToken(username) {
    const payload = { username: username }
    return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '10m' });
}

module.exports.generateAccess = generateAccessToken;
module.exports.authToken = authenticateToken;
module.exports.identifyUser = ensureCorrectUser;