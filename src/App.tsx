import React from 'react';
import AppRouter from './router';

const App = () => {
  return (
    <div className=" min-h-screen w-screen" >
      <div className="bg-gray-500 text-center">
      <h1 className="p-3 text-2xl font-bold text-white">Transaction Service</h1>
      </div>
      <AppRouter />
    </div>
  );
};

export default App;
