import {hot} from 'react-hot-loader/root';
import React from 'react';
import PageHeader from './components/PageHeader/PageHeader';
import PageContent from './components/PageContent/PageContent';

function App() {
  return (
    <>
      <PageHeader/>
      <PageContent/>
    </>
  );
}

export default hot(App);
