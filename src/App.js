import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuild from './containers/BurgerBuilder/BurgerBuilder'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuild></BurgerBuild>
        </Layout>
      </div>
    );
  }
}

export default App;
