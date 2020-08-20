const { param } = require("../routes/getRoutes");

exports.getHomeController = (req ,res) => {
    res.render('home' , {title : "Home Page" , name :'Anonyme' ,message : "" , content : ""})
}

exports.getContactController = (req ,res) =>{
    res.render('contact' ,{title : "Contact Page"})
}