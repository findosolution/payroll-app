export var filterOrganization = (organizations, searchOrganization) => {
  var filteredOrganizations = organizations;

  filteredOrganizations = filteredOrganizations.filter((organization) => {
    var organizationName = organization.name.toLowerCase();
    return (searchOrganization.length === 0 || organizationName.indexOf(searchOrganization.toLowerCase()) > -1);
  });

  return filteredOrganizations;
}
