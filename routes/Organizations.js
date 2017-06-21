var express = require('express');
var router = express.Router();
var Organization=require('../models/Organization');

router.get('/:id?',function(req,res,next){

  if(req.params.id !='Orgs') {

     Organization.getOrganizationById(req.params.id,function(err,rows){

     if(err)
       {
         res.json(err);
       }
       else {
         res.json(rows);
       }
       });

   } else {

     Organization.getAllOrganizations(function(err,rows){

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

  Organization.addOrganization(req.body,function(err,count){
      if(err)
      {
        res.json(err);
      } else {
        res.json(req.body);//or return count for 1 &amp;amp;amp; 0
      }
    });
 });

 router.delete('/:id',function(req,res,next){

  Organization.deleteOrganization(req.params.id,function(err,count){

    if(err)
    {
      res.json(err);
    } else {
      res.json(count);
    }

  });
 });

 router.put('/:id',function(req,res,next){

  Organization.updateOrganization(req.params.id,req.body,function(err,rows){

    if(err)
    {
      res.json(err);
    } else {
      res.json(rows);
    }
  });

 });
 module.exports=router;
