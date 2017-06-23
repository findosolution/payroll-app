# payroll-app

# payroll-api

Following table summarized the routes we will be using.

<table>
<tr>
	<th>Path</th>
	<th>Request Type</th>
  <th> Request Body </th>
  <th> Response Boday </th>
</tr>
<tr>
	<td>http://localhost:3000/Orgs/</td>
	<td>GET</td>
  <td></td>
  <td></td>
</tr>
<tr>
	<td>http://localhost:3000/Orgs/[did]</td>
	<td>GET</td>
  <td></td>
  <td>
		{
			 "did": 15,
			 "name": "DEFddeded Preeivadte Ltd",
			 "code": "DEdF",
			 "addressdid": 2,
			 "active": 1,
			 "addresstypedid": "1",
			 "address1": "street 1",
			 "postalcode": 0,
			 "city": "",
			 "country": "",
			 "email": "",
			 "mobile": 0
	 }
	</td>
</tr>
<tr>
	<td>http://localhost:3000/Orgs/[did]</td>
	<td>DELETE</td>
  <td></td>
  <td></td>
</tr>
<tr>
	<td>http://localhost:3000/Orgs</td>
	<td>POST</td>
  <td></td>
  <td></td>
</tr>
<tr>
	<td>http://localhost:3000/Orgs/[did]</td>
	<td>PUT (pass data in body)</td>
  <td>
    {
        "Name": "DEFddeded Preeivadte Ltd",
        "Code": "DEdF",
        "Active": 1,
        "Contact": {
            "addressTypeDid": 1,
            "address1": "street 1"
        }
    }
  </td>
  <td>
    {
      "addressdid": 5,
      "orgdid": 18
    }
  </td>
</tr>
</table>
