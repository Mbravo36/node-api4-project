const router = require('express').Router();

router.get('/', (req, res, next) => {

});
router.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message
    })
})

module.exports = router;