import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';


class AddOrganizationModal extends React.Component{

  componentDidMount() {
    var modalMarkup = (
      <div id="add-org" className="reveal tiny text-center" data-reveal="">
        <h4>Add Organization</h4>
        <label>Name :</label><input type="text" ref="orgname" placeholder="Company name"/>
        <label>Address :</label><input type="text" ref="orgaddress" placeholder="Company address"/>
        <label>Contact :</label><input type="text" ref="orgcontact" placeholder="Company contact"/>
        <label>Email :</label><input type="text" ref="orgemail" placeholder="Company email"/>
        <button className="button">Create</button>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#add-org'));
    modal.open();
  }

  render(){
    return(
      <div>
      </div>
    );
  }

}

AddOrganizationModal.propTypes = {

}

export default AddOrganizationModal;
