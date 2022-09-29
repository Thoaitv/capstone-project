import React, { Fragment } from 'react';
import AdminOverview from '../../components/AdminOverview/AdminOverview';
import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import PatientList from '../Patient/PatientList';

const Home = () => {
  return (
    <Fragment>
      <AdminOverview />
    </Fragment>
  );
};

export default Home;
