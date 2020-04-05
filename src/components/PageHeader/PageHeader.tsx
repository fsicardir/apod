import React from 'react';
import './PageHeader.css'
import PageLogo from '../PageLogo/PageLogo';
import PageTitle from '../PageTitle/PageTitle';

const PageHeader = () =>
  <header className='-padding-10px-vertical -light-steel-blue-bc -light-slate-grey-bb'>
    <div className='-width-90-percent -hm-auto -display-flex -center-flex'>
      <PageLogo/>
      <PageTitle/>
    </div>
  </header>;

export default PageHeader;