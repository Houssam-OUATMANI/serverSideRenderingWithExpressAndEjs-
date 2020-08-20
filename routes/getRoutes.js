const express =require('express')
const getControllers  = require('../controllers/getControllers')

const router = express.Router()

router.get('/', getControllers.getHomeController)
router.get('/contact',getControllers.getContactController)


module.exports = router