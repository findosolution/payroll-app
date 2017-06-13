import React, {PropTypes, Component} from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import Navbar from './common/Navbar';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
};

export default App;
