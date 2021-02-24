const db = require("../models");
const Draft =db.draft;

exports.save_draft = (req,res)=>{
    const draft = req.body.draft;
    
    Draft.create(draft)
    .then(data=>{
        res.send(data)
    })
}