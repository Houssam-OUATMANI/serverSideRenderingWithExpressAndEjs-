const express = require('express')
const path = require('path')
const app = express()


const getroutes = require('./routes/getRoutes')
const postRoutes = require('./routes/postRoutes')

app.use(express.urlencoded({extended : true}))
app.set('view engine' , 'ejs')

app.use(postRoutes)
app.use(getroutes)

app.listen(8000)