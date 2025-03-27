import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import API from '../api/axious';
import FilterInterface from '../interfaces/FilterInterface';
import ExportExcelButton from './ExportExcelButton';
import Pagination from './Pagination';

const PaymentsTable = () => {

  const filterObject = {
    payment_id: '',
    email: '',
    details: '',
    currency: '',
    project_id: '',
  } as FilterInterface;

  const [filters, setFilters] = useState(filterObject);
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['payments', filters, page],
    queryFn: async () => {
      const params = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (value) params.append(key, value);
      });
      const res = await API.get(`/payments?page=${page}&${params.toString()}`);
      return res.data;
    }
  }); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    setPage(1);
  };

  return (
    <div className="p-4">
      <div className="mb-4 grid grid-cols-1 md:grid-cols-5 gap-2">
        <input
          name="payment_id"
          value={filters.payment_id}
          onChange={handleChange}
          placeholder="Поиск по ID"
          className="p-2 border rounded"
        />
        <input
          name="email"
          value={filters.email}
          onChange={handleChange}
          placeholder="Поиск по email"
          className="p-2 border rounded"
        />
        <input
          name="details"
          value={filters.details}
          onChange={handleChange}
          placeholder="Поиск по реквизитам"
          className="p-2 border rounded"
        />
        <select
          title='Валюта'
          name="currency"
          value={filters.currency}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          <option value="">Все валюты</option>
          <option value="RUB">RUB</option>
          <option value="USD">USD</option>
          <option value="KZT">KZT</option>
        </select>
        <input
          name="project_id"
          value={filters.project_id}
          onChange={handleChange}
          placeholder="Поиск по проекту"
          className="p-2 border rounded"
        />
      </div>

      {isLoading && <p>Загрузка...</p>}
      {isError && <p>Ошибка загрузки платежей</p>}

      {!isLoading && !isError && (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="bg-gray-500 text-white">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Проект</th>
                <th className="px-4 py-2">Реквизиты</th>
                <th className="px-4 py-2">Сумма</th>
                <th className="px-4 py-2">Валюта</th>
                <th className="px-4 py-2">Статус</th>
              </tr>
            </thead>
            <tbody className='text-gray-700  bg-white'>
              {data.data.map((p: any) => (
                <tr key={p.id} className="border-t border-gray-200">
                  <td className="px-4 py-2">{p.payment_id}</td>
                  <td className="px-4 py-2">{p.project?.user?.email}</td>
                  <td className="px-4 py-2">{p.project?.name}</td>
                  <td className="px-4 py-2">{p.details}</td>
                  <td className="px-4 py-2">{p.amount}</td>
                  <td className="px-4 py-2">{p.currency}</td>
                  <td className="px-4 py-2">{p.status}</td>
                </tr>
              ))}
            </tbody>
            <tfoot> 
                <tr className="">
                    <td className="text-center p-4 flex justify-between">
                      <Pagination
                          page={data.current_page}
                          totalPages={data.last_page}
                          setPage={setPage}
                        />
                    </td>
                </tr>
                <tr>
                    <td colSpan={7} className="text-left p-4 flex-col">
                        <div className="span">Всего платежей: {data.total}</div>
                        <div className="span">Текущая страница: {data.current_page}</div>
                        <div className="span">Всего страниц: {data.last_page}</div>
                    </td>
                </tr>
                <tr>
                    <td colSpan={7} className="text-left p-4">
                    <ExportExcelButton filters={filters} />
                    </td>
                </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
};

export default PaymentsTable;
