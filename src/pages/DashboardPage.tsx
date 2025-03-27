import React from 'react';
import PaymentsTable from '../components/PaymentsTable';
import LogoutButton from '../components/LogoutButton';

const DashboardPage = () => {


  return (
    <div className="p-6 h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Платежи</h1>
        <LogoutButton />
      </div>
      <PaymentsTable />
    </div>
  );
};

export default DashboardPage;
