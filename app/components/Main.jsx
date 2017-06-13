import React, {PropTypes, Component} from 'react';
import Navbar from './common/Navbar';

class Main extends Component {

  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.object,
};

export default Main;
