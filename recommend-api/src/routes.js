const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ Status: "success" })
})

module.exports = router