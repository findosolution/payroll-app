import React, {PropTypes, Component} from 'react';
import Header from './common/Header';
import Footer from './common/Footer';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
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
