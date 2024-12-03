const express = require('express');
const router = express.Router();
const cors = require("cors");
const {test, registerUser} = require('../controllers/auth.controllers.js')
//Middlewares
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

router.get('/', test)
router.post('/api/register', registerUser)
module.exports = router