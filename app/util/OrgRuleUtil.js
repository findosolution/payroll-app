export var filterRule = (rules, searchRule) => {
  var filteredRules = rules;

  filteredRules = filteredRules.filter((rule) => {
    var ruleName = rule.name.toLowerCase();
    return (searchRule.length === 0 || ruleName.indexOf(searchRule.toLowerCase()) > -1);
  });

  return filteredRules;
}
