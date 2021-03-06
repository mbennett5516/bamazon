const db = require('../models');

module.exports = function(app){

    app.get('/api/shop', function(req, res){
        db.Products.findAll({}).then(function(rows){
            res.json(rows);
        }).catch(function(error){
            res.json({error: error});
        });
    });

    app.get('/api/product/:id', function(req, res){
        db.Products.findAll({where:{id:req.params.id}}).then(project =>{
            // console.log(project);
            res.json(project);
        }).catch(function(error){
            res.json({error: error});
        });
    });

}