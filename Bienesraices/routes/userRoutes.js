import express from "express";
import { formLogin } from '../controllers/userController.js';
const router = express.Router();

router.get('/', function(req, res) {
    res.json({msg: "Hello world from Express"});
})

/*
router.get('/login', (req, res) => {
    res.render('auth/login');
})
*/
router.get('/login', formLogin);

router.post('/', function(req, res) {
    res.json({msg: "a response POST type!"});
})

router.get('/about-us', (req, res) => {
    res.send('info about us!');
})

export default router;
