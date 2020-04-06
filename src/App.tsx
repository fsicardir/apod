import {hot} from 'react-hot-loader/root';
import React from 'react';
import PageHeader from './components/PageHeader/PageHeader';
import Card from './components/Card/Card';
import items from './data/items.json';

const item = items[0];

function App() {
  return (
    <>
      <PageHeader/>
      <main className="-width-90-percent -hm-auto">
        <Card title={item.title} date={new Date(item.date)} imgUrl={item.url} hdImgUrl={item.hdurl} description={item.explanation} copyright={item.copyright}/>
      </main>
    </>
  );
}

export default hot(App);
