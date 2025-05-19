import express from "express";
const router = express.Router();

/*
 * GET when user visit this URL 
 */
router.get('/', function(req, res) {
    res.json({msg: "Hello world from Express"});
})

router.get('/login', (req, res) => {
    res.render('auth/login');
})

/*
 * POST when user fill a form and you need to process this information. 
 */
router.post('/', function(req, res) {
    res.json({msg: "a response POST type!"});
})

router.get('/about-us', (req, res) => {
    res.send('info about us!');
})

export default router;