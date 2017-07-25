var db=require('../../dbconnection'); //reference of dbconnection.js

var Rule = {

  getAllRules : function(callback) {

      var sql =  `Select
                    r.rule,
                    cr.organization,
                    cr.emp_group as grp,
                    cr.value,
                    rt.type,
                    cr.id
                  from
                    company_rule cr
                    join rule r
                    join rule_type rt
                  where
                    cr.rule = r.id
                    and r.type = rt.id `;
      var contact = {};

      db.query(sql,function (err, result){

        if (err) {
            throw err;
        }

      return callback(result);

    });
  }
}

module.exports = Rule;
