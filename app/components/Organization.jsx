import React from 'react';

export default class Organization extends React.Component {
  render() {
    var {id, name} = this.props;
    return(
      <div>
        <p>{name}</p>
      </div>
    );
  }
};
