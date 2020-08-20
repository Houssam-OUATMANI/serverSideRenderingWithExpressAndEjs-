const express =require('express')

const postController = require('../controllers/postControllers')
const router = express.Router()





router.post('/contact', postController.postContactController)



module.exports = router