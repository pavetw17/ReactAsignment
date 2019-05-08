import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout'
import ImageList from './containers/ImageContainer/ImageListContainer'


class App extends Component {
  render() {
    return (
        <Layout>
          <ImageList />
        </Layout>
    );
  }
}

export default App;
