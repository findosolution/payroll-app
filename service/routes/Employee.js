var express = require('express');
var router = express.Router();
var Employee = require('../models/Employee');
var EmployeeSalaryContent = require('../models/EmployeeSalaryContent');

router.get('/:id?',function(req,res,next){

  if(req.params.id) {

     Employee.getEmployeeById(req.params.id,function(err,rows){

     if(err)
       {
         res.json(err);
       }
       else {
         res.json(rows);
       }
       });

   } else {
     var organizationDid = req.query.orgId;
     Employee.getAllEmployees(function(err,rows){

        if(err)
        {
            res.json(err);
        } else {
            res.json(rows);
        }

      }, organizationDid);
   }
 });
 router.post('/',function(req,res,next){

  Employee.addEmployee(req.body,function(err,count){
      if(err)
      {
        res.json(err);
      } else {
        res.json(req.body);//or return count for 1 &amp;amp;amp; 0
      }
    });
 });

 router.delete('/:id',function(req,res,next){

  Employee.deleteEmployee(req.params.id,function(err,count){

    if(err)
    {
      res.json(err);
    } else {
      res.json(count);
    }

  });
 });

 router.put('/:id',function(req,res,next){

  Employee.updateEmployee(req.params.id,req.body,function(err,rows){

    if(err)
    {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
 });

//employee salary routs
router.get('/:empId/salaryContent/:contentId?', (req, res, next) => {
  if(req.params.empId) {
    if(req.params.contentId) {
      EmployeeSalaryContent.getContentByID(req.params.empId, req.params.contentId, (err, rows) => {
        if(err) {
            res.json(err);
        } else {
            res.json(rows);
        }
      });
    } else {
      EmployeeSalaryContent.getAllContentsByEmp(req.params.empId, (err, rows) => {
        if(err) {
            res.json(err);
        } else {
            res.json(rows);
        }
      });
    }
  } else {
    res.json('No Employee selected');
  }
});

router.post('/:empId/salaryContent/', (req, res, next) => {
  if(req.params.empId) {
    EmployeeSalaryContent.addContent(req.params.empId, req.body, (err, count) => {
      if(err) {
        res.json(err);
      } else {
        res.json(req.body);
      }
    });
  } else {
    res.json('No Employee selected');
  }
});

router.delete('/:empId/salaryContent/:contentId', (req, res, next) => {
  if(req.params.empId) {
    EmployeeSalaryContent.deleteContent(req.params.empId, req.params.contentId, (err, count) => {
     if(err) {
       res.json(err);
     } else {
       res.json(count);
     }
    });
  } else {
    res.json('No Employee selected');
  }
});

router.put('/:empId/salaryContent/:contentId', (req, res, next) => {
  if(req.params.empId) {
    Employee.updateContent(req.params.id,req.body, (err, rows) => {
      if(err) {
         res.json(err);
      } else {
         res.json(rows);
      }
     });
   } else {
     res.json('No Employee selected');
   }
});

module.exports = router;
