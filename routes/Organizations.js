var express = require('express');
var router = express.Router();
var Organization=require('../models/Organization');

router.get('/:id?',function(req,res,next){

  if(req.params.id !="") {

     Organization.getTaskById(req.params.id,function(err,rows){

     console.log('inside getTaskById' + req.params.id);

     if(err)
       {
         res.json(err);
       }
       else {
         res.json(rows);
       }
       });

   } else {

     Organization.getAllTasks(function(err,rows){
       console.log('inside getAllTasks');
        if(err)
        {
            res.json(err);
        } else {
            res.json(rows);
        }

      });
   }
 });
 router.post('/',function(req,res,next){

  Organization.addTask(req.body,function(err,count){
      if(err)
      {
        res.json(err);
      } else {
        res.json(req.body);//or return count for 1 &amp;amp;amp; 0
      }
    });
 });

 router.delete('/:id',function(req,res,next){

  Organization.deleteTask(req.params.id,function(err,count){

    if(err)
    {
      res.json(err);
    } else {
      res.json(count);
    }

  });
 });

 router.put('/:id',function(req,res,next){

  Organization.updateTask(req.params.id,req.body,function(err,rows){

    if(err)
    {
      res.json(err);
    } else {
      res.json(rows);
    }
  });

 });
 module.exports=router;
