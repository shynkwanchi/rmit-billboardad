const express = require('express')
const router = express.Router()

const Billboard = require('../models/Billboard')

router.get('/', (req, res) => {
    Billboard.find({}, (err, billboards) => {
        res.send(billboards)
    })
})

module.exports = router;