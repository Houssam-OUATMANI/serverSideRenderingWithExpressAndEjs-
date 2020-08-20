exports.postContactController = (req ,res)=>{
    let body = req.body
    console.log(body)
    res.render('home',{message : "Votre message a été envoyé" , content : body ,title : "Home Page" , name :body.name})
}