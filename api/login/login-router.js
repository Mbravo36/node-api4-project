const router = require('express').Router();

router.post('/', (req, res, next) => {

});

router.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message
    });
});

module.exports = router;