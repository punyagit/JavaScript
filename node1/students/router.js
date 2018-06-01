const express = require('express')
const router = express.Router()


router.get('/', (req, resp) => {
    resp.send('GET /')

})

router.post('/', (req, resp) => {
    console.dir(req.body)
})



module.exports = router