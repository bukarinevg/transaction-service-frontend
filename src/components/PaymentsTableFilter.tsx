
import FilterInterface from '../interfaces/FilterInterface';

interface PropsPaymentsTableFilter  {
    filters :  FilterInterface,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const PaymentsTableFilter = ({filters, onChange} : PropsPaymentsTableFilter) => {
    return (
        <div className="mb-4 grid grid-cols-1 md:grid-cols-5 gap-2">
          <input
            name="payment_id"
            value={filters.payment_id}
            onChange={onChange}
            placeholder="Поиск по ID"
            className="p-2 border rounded"
          />
          <input
            name="email"
            value={filters.email}
            onChange={onChange}
            placeholder="Поиск по email"
            className="p-2 border rounded"
          />
          <input
            name="details"
            value={filters.details}
            onChange={onChange}
            placeholder="Поиск по реквизитам"
            className="p-2 border rounded"
          />
          <select
            title="Валюта"
            name="currency"
            value={filters.currency}
            onChange={onChange}
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
            onChange={onChange}
            placeholder="Поиск по проекту"
            className="p-2 border rounded"
          />
        </div>
      );
}

export default PaymentsTableFilter;