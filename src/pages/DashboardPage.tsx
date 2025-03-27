import PaymentsTable from '../components/PaymentsTable';
import UserPanel from '../components/UserPanel';

const DashboardPage = () => {

  return (
    <div className="p-6 h-screen">
      <UserPanel />
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Платежи</h1>
      </div>
        <PaymentsTable />
    </div>
  );
};

export default DashboardPage;
