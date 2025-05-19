import express from "express";
const router = express.Router();

router.get('/', function(req, res) {
    res.json({msg: "Hello world from Express"});
})

router.get('/about-us', (req, res) => {
    res.send('info about us!');
})

export default router;